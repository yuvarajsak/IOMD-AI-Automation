import { mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";

export type ReportStepStatus = "PASSED" | "FAILED" | "SKIPPED" | "UNKNOWN";

export type ReportStep = {
  keyword?: string;
  text: string;
  status: ReportStepStatus;
  durationMs?: number;
  error?: string;
  screenshot?: string;
};

export type ScenarioReport = {
  id: string;
  feature?: string;
  name: string;
  tags: string[];
  status: ReportStepStatus;
  startTime: string;
  endTime: string;
  durationMs: number;
  platform?: string;
  device?: string;
  steps: ReportStep[];
  error?: string;
};

export type ScenarioReportDraft = Omit<ScenarioReport, "endTime" | "durationMs"> & {
  startEpoch: number;
};

export const reportRunId = process.env.IOMD_REPORT_RUN_ID ?? new Date().toISOString().replace(/[:.]/g, "-");
process.env.IOMD_REPORT_RUN_ID = reportRunId;

export const artifactRoot = path.resolve(process.cwd(), "artifacts");
export const reportRoot = path.join(artifactRoot, "reports");
export const reportDataDir = path.join(reportRoot, "data", reportRunId);
export const screenshotDir = path.join(artifactRoot, "screenshots", reportRunId);
export const allureResultsDir = path.join(artifactRoot, "allure-results");
export const allureReportDir = path.join(artifactRoot, "allure-report");

export const ensureReportDirs = async (): Promise<void> => {
  await mkdir(reportDataDir, { recursive: true });
  await mkdir(screenshotDir, { recursive: true });
};

export const cleanReportOutput = async (): Promise<void> => {
  await rm(path.join(reportRoot, "extent-report.html"), { force: true });
  await rm(path.join(reportRoot, "html-report.html"), { force: true });
  await rm(allureResultsDir, { recursive: true, force: true });
  await rm(allureReportDir, { recursive: true, force: true });
  await ensureReportDirs();
};

export const safeName = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 100) || "item";

export const writeScenarioReport = async (scenario: ScenarioReport): Promise<void> => {
  await ensureReportDirs();
  const fileName = `${scenario.startTime.replace(/[:.]/g, "-")}-${safeName(scenario.name)}.json`;
  await writeFile(path.join(reportDataDir, fileName), JSON.stringify(scenario, null, 2));
};

export const generateHtmlReports = async (): Promise<void> => {
  const scenarios = await readScenarioReports();
  await mkdir(reportRoot, { recursive: true });
  const html = renderReportHtml(scenarios, "IOMD Automation Extent Report", true);
  const compactHtml = renderReportHtml(scenarios, "IOMD Automation HTML Report", false);
  const customHtml = renderCustomDashboardHtml(scenarios);
  await writeFile(path.join(reportRoot, "extent-report.html"), html);
  await writeFile(path.join(reportRoot, "html-report.html"), compactHtml);
  await writeFile(path.join(reportRoot, "custom-report.html"), customHtml);
};

const readScenarioReports = async (): Promise<ScenarioReport[]> => {
  const currentRunScenarios = await readScenarioReportsFromDir(reportDataDir);
  if (currentRunScenarios.length > 0) {
    return currentRunScenarios;
  }
  return readLatestScenarioReports();
};

const readScenarioReportsFromDir = async (dir: string): Promise<ScenarioReport[]> => {
  try {
    const files = await readdir(dir);
    const scenarios = await Promise.all(
      files
        .filter((file) => file.endsWith(".json"))
        .map(async (file) => JSON.parse(await readFile(path.join(dir, file), "utf8")) as ScenarioReport)
    );
    return scenarios.sort((left, right) => left.startTime.localeCompare(right.startTime));
  } catch {
    return [];
  }
};

const readLatestScenarioReports = async (): Promise<ScenarioReport[]> => {
  try {
    const dataRoot = path.join(reportRoot, "data");
    const dirs = await readdir(dataRoot);
    const candidates = await Promise.all(
      dirs.map(async (dir) => {
        const fullPath = path.join(dataRoot, dir);
        const info = await stat(fullPath);
        return info.isDirectory() ? { fullPath, mtimeMs: info.mtimeMs } : undefined;
      })
    );
    const latestDirs = candidates
      .filter((candidate): candidate is { fullPath: string; mtimeMs: number } => Boolean(candidate))
      .sort((left, right) => right.mtimeMs - left.mtimeMs);
    for (const dir of latestDirs) {
      const scenarios = await readScenarioReportsFromDir(dir.fullPath);
      if (scenarios.length > 0) {
        return scenarios;
      }
    }
  } catch {
    return [];
  }
  return [];
};

const renderReportHtml = (scenarios: ScenarioReport[], title: string, detailed: boolean): string => {
  const totals = scenarios.reduce(
    (summary, scenario) => {
      summary.total += 1;
      summary[scenario.status.toLowerCase() as "passed" | "failed" | "skipped" | "unknown"] += 1;
      summary.durationMs += scenario.durationMs;
      return summary;
    },
    { total: 0, passed: 0, failed: 0, skipped: 0, unknown: 0, durationMs: 0 }
  );

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <style>
    :root { color-scheme: light; --bg:#f7f8fb; --panel:#fff; --ink:#172033; --muted:#687083; --pass:#11845b; --fail:#c73535; --skip:#8a6d1f; --line:#e5e8ef; }
    body { margin:0; background:var(--bg); color:var(--ink); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    header { padding:28px 32px 16px; background:var(--panel); border-bottom:1px solid var(--line); }
    h1 { margin:0 0 8px; font-size:26px; }
    .meta { color:var(--muted); font-size:13px; }
    .summary { display:grid; grid-template-columns:repeat(auto-fit,minmax(150px,1fr)); gap:12px; padding:20px 32px; }
    .card, details { background:var(--panel); border:1px solid var(--line); border-radius:8px; box-shadow:0 1px 2px rgba(15,23,42,.04); }
    .card { padding:16px; }
    .label { color:var(--muted); font-size:12px; text-transform:uppercase; letter-spacing:.04em; }
    .value { margin-top:6px; font-size:24px; font-weight:700; }
    main { padding:0 32px 32px; }
    details { margin-bottom:12px; overflow:hidden; }
    summary { cursor:pointer; display:flex; align-items:center; gap:12px; padding:14px 16px; font-weight:700; }
    .scenario-meta { margin-left:auto; color:var(--muted); font-size:12px; font-weight:500; }
    .badge { border-radius:999px; padding:4px 9px; color:#fff; font-size:12px; font-weight:700; }
    .PASSED { background:var(--pass); } .FAILED { background:var(--fail); } .SKIPPED { background:var(--skip); } .UNKNOWN { background:#64748b; }
    table { width:100%; border-collapse:collapse; font-size:13px; }
    th, td { border-top:1px solid var(--line); padding:10px 12px; text-align:left; vertical-align:top; }
    th { color:var(--muted); font-weight:700; background:#fbfcfe; }
    pre { white-space:pre-wrap; margin:6px 0 0; color:var(--fail); }
    a { color:#2454d6; text-decoration:none; }
    .empty { padding:32px; color:var(--muted); }
  </style>
</head>
<body>
  <header>
    <h1>${escapeHtml(title)}</h1>
    <div class="meta">Run ID: ${escapeHtml(reportRunId)} · Generated: ${escapeHtml(new Date().toLocaleString())}</div>
  </header>
  <section class="summary">
    ${summaryCard("Total", totals.total)}
    ${summaryCard("Passed", totals.passed)}
    ${summaryCard("Failed", totals.failed)}
    ${summaryCard("Skipped", totals.skipped)}
    ${summaryCard("Duration", formatDuration(totals.durationMs))}
  </section>
  <main>
    ${scenarios.length === 0 ? '<div class="empty">No scenario data was captured for this run.</div>' : scenarios.map((scenario) => renderScenario(scenario, detailed)).join("\n")}
  </main>
</body>
</html>`;
};

const renderCustomDashboardHtml = (scenarios: ScenarioReport[]): string => {
  const totals = buildTotals(scenarios);
  const failedScenarios = scenarios.filter((scenario) => scenario.status === "FAILED");
  const slowestSteps = scenarios
    .flatMap((scenario) => scenario.steps.map((step) => ({ scenario: scenario.name, ...step })))
    .sort((left, right) => (right.durationMs ?? 0) - (left.durationMs ?? 0))
    .slice(0, 5);
  const passPercent = totals.total ? Math.round((totals.passed / totals.total) * 100) : 0;
  const failPercent = totals.total ? Math.round((totals.failed / totals.total) * 100) : 0;
  const otherPercent = Math.max(0, 100 - passPercent - failPercent);
  const status = totals.failed > 0 ? "Failure" : totals.total === 0 ? "No Data" : "Passed";

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>IOMD Custom Automation Report</title>
  <style>
    :root { --blue:#0b8fd3; --nav:#06384c; --bg:#f4f7fa; --panel:#fff; --line:#e3e8ef; --ink:#263142; --muted:#69758a; --pass:#31b765; --fail:#ef4b34; --skip:#ffae22; --other:#9aa3ad; }
    * { box-sizing:border-box; }
    body { margin:0; background:var(--bg); color:var(--ink); font-family:Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    .app { display:grid; grid-template-columns:64px minmax(0,1fr) 300px; min-height:100vh; }
    .nav { background:var(--nav); padding-top:16px; display:flex; flex-direction:column; align-items:center; gap:18px; color:#d4ecf8; }
    .nav .logo { width:34px; height:34px; border-radius:7px; background:var(--blue); display:grid; place-items:center; font-weight:800; }
    .nav span { width:26px; height:26px; border-radius:5px; display:grid; place-items:center; font-size:15px; }
    .nav .active { background:#ff4b2f; color:white; }
    .top { background:white; border-bottom:1px solid var(--line); height:68px; display:flex; align-items:center; padding:0 24px; gap:12px; }
    h1 { font-size:22px; margin:0; font-weight:700; }
    .pill { border-radius:5px; padding:7px 10px; color:#fff; font-weight:800; font-size:13px; background:var(--fail); }
    .pill.Passed { background:var(--pass); }
    .pill.NoData { background:var(--other); }
    main { min-width:0; }
    .content { padding:22px; }
    .grid { display:grid; grid-template-columns:minmax(0,1.15fr) minmax(280px,.85fr); gap:20px; }
    .panel { background:var(--panel); border:1px solid var(--line); border-radius:6px; padding:20px; box-shadow:0 1px 2px rgba(20,30,45,.04); }
    .summary-panel { display:grid; grid-template-columns:220px minmax(0,1fr); gap:22px; align-items:center; }
    .pie { width:190px; height:190px; border-radius:50%; background:conic-gradient(var(--pass) 0 ${passPercent}%, var(--fail) ${passPercent}% ${passPercent + failPercent}%, var(--skip) ${passPercent + failPercent}% ${passPercent + failPercent + otherPercent}%, var(--other) 0); margin:auto; }
    .legend { display:grid; gap:12px; }
    .legend-row { display:grid; grid-template-columns:28px 1fr auto; gap:10px; align-items:center; color:var(--muted); font-weight:700; }
    .swatch { height:28px; border-radius:4px; }
    .metric { font-size:28px; font-weight:800; color:var(--ink); }
    .donut { width:190px; height:190px; border-radius:50%; background:conic-gradient(#4bb7f1 0 100%); display:grid; place-items:center; margin:auto; }
    .donut-inner { width:130px; height:130px; border-radius:50%; background:white; display:grid; place-items:center; text-align:center; color:var(--muted); font-weight:700; }
    .donut-inner strong { display:block; color:var(--ink); font-size:28px; margin:5px 0; }
    .bars { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; margin:20px 0; }
    .bar { border:1px solid var(--line); border-radius:5px; overflow:hidden; display:grid; grid-template-columns:72px 1fr; min-height:44px; background:white; }
    .bar strong { display:grid; place-items:center; color:white; }
    .bar span { display:flex; align-items:center; padding:0 12px; color:var(--muted); font-weight:800; }
    .tabs { display:flex; gap:22px; border-bottom:1px solid var(--line); margin-top:8px; }
    .tab { padding:0 0 10px; color:var(--blue); font-weight:800; position:relative; }
    .tab.active:after { content:""; position:absolute; left:0; right:0; bottom:-1px; height:3px; background:var(--blue); }
    .list { border:1px solid var(--line); border-top:0; background:white; max-height:320px; overflow:auto; }
    .item { display:grid; grid-template-columns:92px minmax(0,1fr) 70px; gap:12px; align-items:center; padding:13px 16px; border-top:1px solid var(--line); }
    .tag { color:white; border-radius:4px; padding:6px 8px; font-size:12px; font-weight:800; text-align:center; background:var(--fail); }
    .tag.SKIPPED { background:var(--skip); }
    .tag.PASSED { background:var(--pass); }
    .item a { color:#268bd7; font-weight:800; text-decoration:none; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
    .time { color:var(--muted); font-weight:800; text-align:right; }
    aside { background:white; border-left:1px solid var(--line); padding:24px 22px; }
    aside h2, .section-title { color:#168dd2; font-size:15px; margin:0 0 14px; text-transform:uppercase; }
    .about { display:grid; gap:22px; color:var(--muted); font-weight:700; }
    .about strong { color:var(--ink); display:block; }
    .run { display:grid; grid-template-columns:repeat(auto-fit,minmax(150px,1fr)); gap:12px; margin-top:20px; }
    .run-card { background:#f7f9fc; border:1px solid var(--line); padding:14px; border-radius:5px; }
    .run-card strong { display:block; margin-bottom:6px; }
    .failures { margin-top:22px; display:grid; gap:18px; }
    .failure-card { border:1px solid var(--line); background:white; border-radius:6px; padding:16px; }
    .failure-card h3 { margin:0 0 8px; font-size:16px; }
    pre { white-space:pre-wrap; background:#263142; color:#dfe8f3; padding:14px; border-radius:4px; overflow:auto; max-height:220px; }
    .shot { margin-top:12px; border:1px solid var(--line); border-radius:5px; overflow:hidden; background:#f8fafc; }
    .shot img { width:100%; display:block; }
    .shot a { display:block; padding:10px 12px; color:#268bd7; font-weight:800; text-decoration:none; }
    @media (max-width: 980px) { .app { grid-template-columns:1fr; } .nav, aside { display:none; } .grid, .summary-panel, .bars { grid-template-columns:1fr; } }
  </style>
</head>
<body>
  <div class="app">
    <nav class="nav"><div class="logo">io</div><span class="active">R</span><span>H</span><span>L</span><span>F</span><span>Q</span><span>S</span></nav>
    <main>
      <div class="top"><h1>IOMD Automation</h1><span>(${escapeHtml(String(scenarios[0]?.platform ?? "Mobile"))})</span><span class="pill ${escapeHtml(status.replace(/\s/g, ""))}">${escapeHtml(status)}</span></div>
      <div class="content">
        <div class="grid">
          <section class="panel summary-panel">
            <div class="pie" aria-label="test status chart"></div>
            <div>
              <div class="metric">${totals.total} total tests</div>
              <div class="legend">
                ${legendRow("Passed", totals.passed, passPercent, "var(--pass)")}
                ${legendRow("Failed", totals.failed, failPercent, "var(--fail)")}
                ${legendRow("Skipped", totals.skipped, totals.total ? Math.round((totals.skipped / totals.total) * 100) : 0, "var(--skip)")}
                ${legendRow("Unknown", totals.unknown, totals.total ? Math.round((totals.unknown / totals.total) * 100) : 0, "var(--other)")}
              </div>
            </div>
          </section>
          <section class="panel">
            <div class="donut"><div class="donut-inner">Total Time<strong>${formatDuration(totals.durationMs)}</strong>${totals.total} scenarios</div></div>
          </section>
        </div>
        <section class="bars">
          ${progressBar(`${passPercent}%`, `${totals.passed} successful`, "var(--pass)")}
          ${progressBar(`${failPercent}%`, `${totals.failed} failures`, "var(--fail)")}
          ${progressBar(`${otherPercent}%`, `${totals.skipped + totals.unknown} others`, "var(--other)")}
        </section>
        <section class="panel">
          <div class="tabs"><div class="tab active">FAILURES</div><div class="tab">SLOWEST TESTS</div></div>
          <div class="list">
            ${(failedScenarios.length ? failedScenarios : scenarios).slice(0, 6).map((scenario) => scenarioListItem(scenario)).join("") || '<div class="item"><span class="tag PASSED">Passed</span><a>No failed tests in this run</a><span class="time">-</span></div>'}
          </div>
        </section>
        <section class="run">
          ${slowestSteps.map((step, index) => `<div class="run-card"><strong>Thread #${index + 1}</strong><span class="tag ${escapeHtml(step.status)}">${escapeHtml(step.status)}</span> ${formatDuration(step.durationMs ?? 0)}<br><small>${escapeHtml(step.text)}</small></div>`).join("")}
        </section>
        <section class="failures">
          ${failedScenarios.map(renderFailureCard).join("")}
        </section>
      </div>
    </main>
    <aside>
      <h2>About</h2>
      <div class="about">
        <div><strong>Completed</strong>Created ${escapeHtml(new Date().toLocaleString())}</div>
        <div><strong>Source</strong>IOMD TypeScript Appium</div>
        <div><strong>Run ID</strong>${escapeHtml(reportRunId)}</div>
        <div><strong>Reports</strong><a href="./extent-report.html">Extent report</a><br><a href="./html-report.html">HTML report</a></div>
      </div>
    </aside>
  </div>
</body>
</html>`;
};

const renderScenario = (scenario: ScenarioReport, detailed: boolean): string => `<details open>
  <summary>
    <span class="badge ${scenario.status}">${scenario.status}</span>
    <span>${escapeHtml(scenario.name)}</span>
    <span class="scenario-meta">${escapeHtml(scenario.feature ?? "feature")} · ${formatDuration(scenario.durationMs)}</span>
  </summary>
  ${detailed ? renderScenarioDetails(scenario) : ""}
  <table>
    <thead><tr><th>#</th><th>Step</th><th>Status</th><th>Duration</th><th>Evidence</th></tr></thead>
    <tbody>
      ${scenario.steps.map((step, index) => renderStep(step, index)).join("\n")}
    </tbody>
  </table>
</details>`;

const renderScenarioDetails = (scenario: ScenarioReport): string => `<table>
  <tbody>
    <tr><th>Feature</th><td>${escapeHtml(scenario.feature ?? "-")}</td></tr>
    <tr><th>Tags</th><td>${escapeHtml(scenario.tags.join(", ") || "-")}</td></tr>
    <tr><th>Platform</th><td>${escapeHtml(scenario.platform ?? "-")}</td></tr>
    <tr><th>Device</th><td>${escapeHtml(scenario.device ?? "-")}</td></tr>
    <tr><th>Started</th><td>${escapeHtml(scenario.startTime)}</td></tr>
    <tr><th>Finished</th><td>${escapeHtml(scenario.endTime)}</td></tr>
    ${scenario.error ? `<tr><th>Error</th><td><pre>${escapeHtml(scenario.error)}</pre></td></tr>` : ""}
  </tbody>
</table>`;

const renderStep = (step: ReportStep, index: number): string => `<tr>
  <td>${index + 1}</td>
  <td>${escapeHtml([step.keyword, step.text].filter(Boolean).join(" "))}${step.error ? `<pre>${escapeHtml(step.error)}</pre>` : ""}</td>
  <td><span class="badge ${step.status}">${step.status}</span></td>
  <td>${formatDuration(step.durationMs ?? 0)}</td>
  <td>${step.screenshot ? `<a href="${escapeHtml(path.relative(reportRoot, step.screenshot))}">Screenshot</a>` : "-"}</td>
</tr>`;

const summaryCard = (label: string, value: string | number): string => `<div class="card"><div class="label">${escapeHtml(label)}</div><div class="value">${escapeHtml(String(value))}</div></div>`;

const buildTotals = (scenarios: ScenarioReport[]) =>
  scenarios.reduce(
    (summary, scenario) => {
      summary.total += 1;
      summary[scenario.status.toLowerCase() as "passed" | "failed" | "skipped" | "unknown"] += 1;
      summary.durationMs += scenario.durationMs;
      return summary;
    },
    { total: 0, passed: 0, failed: 0, skipped: 0, unknown: 0, durationMs: 0 }
  );

const legendRow = (label: string, count: number, percent: number, color: string): string =>
  `<div class="legend-row"><span class="swatch" style="background:${color}"></span><span>${escapeHtml(label)}</span><span>${count} (${percent}%)</span></div>`;

const progressBar = (percent: string, label: string, color: string): string =>
  `<div class="bar"><strong style="background:${color}">${escapeHtml(percent)}</strong><span>${escapeHtml(label)}</span></div>`;

const scenarioListItem = (scenario: ScenarioReport): string =>
  `<div class="item"><span class="tag ${escapeHtml(scenario.status)}">${escapeHtml(scenario.status)}</span><a href="#${escapeHtml(scenario.id)}">${escapeHtml(scenario.name)}</a><span class="time">${formatDuration(scenario.durationMs)}</span></div>`;

const renderFailureCard = (scenario: ScenarioReport): string => {
  const failedSteps = scenario.steps.filter((step) => step.status === "FAILED" || step.error);
  return `<article class="failure-card" id="${escapeHtml(scenario.id)}">
    <h3>${escapeHtml(scenario.name)}</h3>
    <div class="meta">${escapeHtml(scenario.feature ?? "Feature")} - ${formatDuration(scenario.durationMs)}</div>
    ${failedSteps.map(renderFailedStepEvidence).join("")}
  </article>`;
};

const renderFailedStepEvidence = (step: ReportStep): string => `<section>
  <p><span class="tag FAILED">Failed</span> ${escapeHtml([step.keyword, step.text].filter(Boolean).join(" "))}</p>
  ${step.error ? `<pre>${escapeHtml(step.error)}</pre>` : ""}
  ${step.screenshot ? `<div class="shot"><img src="${escapeHtml(path.relative(reportRoot, step.screenshot))}" alt="${escapeHtml(step.text)} failure screenshot"><a href="${escapeHtml(path.relative(reportRoot, step.screenshot))}">Open failure screenshot</a></div>` : ""}
</section>`;

const formatDuration = (durationMs: number): string => {
  if (durationMs < 1000) {
    return `${durationMs}ms`;
  }
  const seconds = Math.round(durationMs / 100) / 10;
  return `${seconds}s`;
};

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
