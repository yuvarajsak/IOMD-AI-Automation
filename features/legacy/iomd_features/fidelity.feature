Feature: To Validate the autofill option and interaction are getting captured correctly in the Fidelity application

  #interaction cannot be captured as it requires appropriate ssl information
  @all
  Scenario Outline: TC_01- To validate the login functionality in the Fidelity application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<Login>" button by name with "<index>" in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user clicks "<Register>" button by only Staictext in the Website
    When user enables the Extension
    And user selects User name from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for FirstName are filled as expected for the Website
    Then user verifies the auto fill details for LastName are filled as expected for the Website

    #When user enters the data for guest fidelity signup
    #And user clicks "<SignUp>" button by only Staictext in the Website
    #And user switches back to the IOMD application
    #And user verifies and clicks on the business tab
    #And user clicks "<business>" business by only name in the IOMD Transactions
    #And user verifies Login from interaction tab
    Examples: 
      | url                                  | SignUp  | business | Login  | index | Register     |
      | https://guest.fidelity.com/GA/signup | Sign Up | Fidelity | Log In |     1 | Register Now |

  @all
  Scenario Outline: TC_02- To validate the forget username functionality in the Fidelity application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<accept>" button by only name in the Website
    And user clicks "<Login>" button by only Staictext in the Website
    And user clicks "<forgotUsername>" button by only Staictext in the Website
    When user enables the Extension
    And user selects User name from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for FirstName are filled as expected for the Website
    Then user verifies the auto fill details for LastName are filled as expected for the Website

    Examples: 
      | url                      | Login  | forgotUsername               | accept   |
      | https://www.fidelity.com | Log In | Forgot username or password? | I Accept |

  @all
  Scenario Outline: TC_03- To validate the SignUp functionality in the Fidelity application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<accept>" button by only name in the Website
    And user clicks "<openAcc>" button by name with "<oindex>" in the Website
    And user clicks "<rolloverAcc>" button by name with "<oindex>" in the Website
    And user clicks "<No>" button by only Staictext in the Website
    And user clicks "<Next>" button by only name in the Website
    When user enables the Extension
    And user selects Anonymous Email from Extension
    And user selects User name from Extension
    And user selects Phonenumber from Extension
    When user select Other Address from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for Email are filled as expected for the Website
    Then user verifies the auto fill details for FirstName are filled as expected for the Website
    Then user verifies the auto fill details for LastName are filled as expected for the Website
    Then user verifies the auto fill details for ZipCode are filled as expected for the Website
    Then user verifies the auto fill details for PhoneNumber with format in the Website

    Examples: 
      | url                      | Login  | accept   | openAcc         | rolloverAcc     | index | No | Next |
      | https://www.fidelity.com | Log In | I Accept | Open an account | Open a Rollover |     1 | No | Next |
