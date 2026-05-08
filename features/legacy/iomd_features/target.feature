Feature: To Validate the autofill option and interaction are getting captured correctly in the Target application

  @all
  Scenario Outline: TC_01- To validate the login functionality in the Target application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<Login>" button by name with "<index>" in the Website
    And user clicks "<Signin>" button by only Staictext in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                     | Login   | Signin  | index |
      | https://www.target.com/ | Account | Sign in |     2 |

  @all
  Scenario Outline: TC_02- To validate the forget username functionality in the Target application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<Login>" button by name with "<index>" in the Website
    And user clicks "<Signin>" button by only Staictext in the Website
    And user clicks "<forgotUsername>" button by only Staictext in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user clicks "<continue>" button by only name in the Website
    Then user accepts the popup
    And user clicks "<sendcode>" button by only name in the Website
    Then user accepts the popup
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Others from interaction tab

    Examples: 
      | url                     | Login   | forgotUsername   | Signin  | index | business | continue | sendcode  |
      | https://www.target.com/ | Account | Forgot password? | Sign in |     2 | Target   | Continue | Send code |

  @all
  Scenario Outline: TC_04- To validate the SignUp functionality in the Target application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<Login>" button by name with "<index>" in the Website
    And user clicks "<Signin>" button by only Staictext in the Website
    And user clicks "<createAcc>" button by only name in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    And user selects personal Phonenumber from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user verifies the auto fill details for personal Phonenumber are filled as expected for the Website

    Examples: 
      | url                     | Login   | Signin  | createAcc                  | index |
      | https://www.target.com/ | Account | Sign in | Create your Target account |     2 |
