Feature: To Validate the autofill option and interaction are getting captured correctly in the Ecoya application

  @all @iomd_Pay
  Scenario Outline: TC_01- To validate the SignIn functionality in the Ecoya application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user close the popup in Ecoya Website
    When user enters data in signin page for Ecoya website
    And user clicks "<SignIn>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    And user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Login from interaction tab

    Examples: 
      | url                               | business | SignIn  |
      | https://ecoya.co.uk/account/login | Co       | Sign In |

  @all
  Scenario Outline: TC_02- To validate the forget password functionality in the Ecoya application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user close the popup in Ecoya Website
    And user clicks "<ForgotPassword>" button by only name in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                               | ForgotPassword        |
      | https://ecoya.co.uk/account/login | Forgot your password? |

  @all
  Scenario Outline: TC_03- To validate the SignUp functionality in the Ecoya application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user close the popup in Ecoya Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website

    Examples: 
      | url                                  | Create | business |
      | https://ecoya.co.uk/account/register | Create | Co       |
