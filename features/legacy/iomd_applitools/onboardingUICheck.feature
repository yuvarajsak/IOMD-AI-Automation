Feature: To Validate the UI with Applitools

  @all @dyn_Exe @uiExe1
  Scenario Outline: TC_01- To validate the UI for Consumer Onboarding flow
    Given I initiate applitools eyes to proceed validation for "<testcase>"
    When user validates Allow popup screen on launching the application
    When user validates splash screen of the application
    And user validates checkbox screen
    And user validates BeginSetup screen
    And user validates Setup step1 screen
    And user validates tell your friends screen
    And user validates Setup step2 screen
    And user enables extension and switch back to the app
    And user validates Enables extension screen
    And user validates animated cards in the homepage
    And user validates forward email screen on welcome email
    And user validates Business Tab screen
    And user validates Interaction Tab screen
    And user validates Messages Tab screen
    And user validates Settings screen
    And user validates Profile Information screen
    And user validates ShowMeMagic in Settings screen
    And user validates Credentials in Settings screen
    Then user closes applitools eyes after validation

    Examples: 
      | testcase   |
      | TestDesign |
