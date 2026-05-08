Feature: To Validate the autofill option and interaction are getting captured correctly in the AirNewzealand application

  @all @dyn_Exe @air
  Scenario Outline: TC_01- To validate the login functionality in the AirNewzealand application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<AllowOnceBtn>" button by name in the Website
    And user clicks "<Allow>" button by only name in the Website
    And user clicks "<SignIn>" button by name with "<Index>" in the Website
    When user enters data in login page for airnewzealand website
    And user clicks "<SignIn>" button by name with "<Sindex>" in the Website
    Then user accepts the popup
    Then user accepts the popup
    And user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Login from interaction tab

    Examples: 
      | url                            | AllowOnceBtn | Allow | SignIn  | Index | Sindex | business      | notnow  |
      | https://www.airnewzealand.com/ | Allow Once   | Allow | Sign in |     2 |      3 | Airnewzealand | Not Now |

  @all @dyn_Exe
  Scenario Outline: TC_02- To validate the forget username and password functionality in the AirNewzealand application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<AllowOnceBtn>" button by name in the Website
    And user clicks "<Allow>" button by only name in the Website
    And user clicks "<SignIn>" button by name with "<Index>" in the Website
    And user clicks "<ForgotUsername>" button by name with "<Findex>" in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                            | AllowOnceBtn | Allow | SignIn  | ForgotUsername               | Index | Findex |
      | https://www.airnewzealand.com/ | Allow Once   | Allow | Sign in | Forgot username or password? |     2 |      1 |

  @all @dyn_Exe
  Scenario Outline: TC_04- To validate the SignUp functionality in the AirNewzealand application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<AllowOnceBtn>" button by name in the Website
    And user clicks "<Allow>" button by only name in the Website
    And user clicks "<SignIn>" button by name with "<Index>" in the Website
    And user clicks "<Join>" button by name with "<Findex>" in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    And user selects personal Address from Extension
    And user selects personal Phonenumber from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website

    #Then user verifies the auto fill details for personal Phonenumber are filled as expected for the Website
    Examples: 
      | url                            | AllowOnceBtn | Allow | SignIn  | Join           | Index | Findex |
      | https://www.airnewzealand.com/ | Allow Once   | Allow | Sign in | Join Airpoints |     2 |      1 |
