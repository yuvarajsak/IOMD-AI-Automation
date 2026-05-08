import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
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
  await writeFile(path.join(reportRoot, "extent-report.html"), html);
  await writeFile(path.join(reportRoot, "html-report.html"), compactHtml);
};

const readScenarioReports = async (): Promise<ScenarioReport[]> => {
  try {
    const files = await readdir(reportDataDir);
    const scenarios = await Promise.all(
      files
        .filter((file) => file.endsWith(".json"))
        .map(async (file) => JSON.parse(await readFile(path.join(reportDataDir, file), "utf8")) as ScenarioReport)
    );
    return scenarios.sort((left, right) => left.startTime.localeCompare(right.startTime));
  } catch {
    return [];
  }
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
