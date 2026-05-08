Feature: Codegen Step03 splash and onboarding

  @codegen @step03 @onboarding
  Scenario: TC_01 - Skip Gmail import and reach commerce token creation
    Given Codegen Step03 onboarding starts from a fresh launch
    When user follows the Codegen Step03 skip Gmail path
    Then Codegen Step03 create token screen is displayed
    When user enters commerce token prefix "codexqa"
    Then Codegen Step03 commerce token input contains "codexqa"

  @codegen @step03 @onboarding @validation
  Scenario: TC_02 - Validate commerce token screen controls
    Given Codegen Step03 onboarding starts from a fresh launch
    When user follows the Codegen Step03 skip Gmail path
    Then Codegen Step03 create token screen is displayed
    Then Codegen Step03 create token controls are displayed
    When user enters commerce token prefix "tes"
    Then Codegen Step03 commerce token input contains "tes"

  @codegen @step03 @onboarding @create
  Scenario: TC_03 - Create commerce token and verify post-create state
    Given Codegen Step03 onboarding starts from a fresh launch
    When user follows the Codegen Step03 skip Gmail path
    Then Codegen Step03 create token screen is displayed
    When user enters a unique Codegen Step03 commerce token prefix
    And user submits the Codegen Step03 commerce token
    Then Codegen Step03 token creation progress is shown
    Then Codegen Step03 post-create success state is displayed
