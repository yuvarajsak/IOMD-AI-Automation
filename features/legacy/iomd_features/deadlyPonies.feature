Feature: To Validate the autofill option and interaction are getting captured correctly in the DeadlyPonies application

  @all @dyn_Exe @dead
  Scenario Outline: TC_01- To validate the login functionality in the DeadlyPonies application
   When user completes onboarding flow
    When user launches the website "<url>"
    #Then user clicks close pop in deadlyponies
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    When user enters data in signin page for deadlyponies website
    And user clicks "<SignIn>" button by only name in the Website
     Then user accepts the popup
    Then user accepts the popup
    And user switches back to the IOMD application
     And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Login from interaction tab

    Examples: 
      | url                             | SignIn  | business     |
      | https://deadlyponies.com/login/ | Sign In | Deadlyponies |

  @all @dyn_Exe
  Scenario Outline: TC_02- To validate the forget password functionality in the DeadlyPonies application
   When user completes onboarding flow
    When user launches the website "<url>"
    Then user clicks close pop in deadlyponies
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                      |
      | https://deadlyponies.com/password_reset/ |

  @all @dyn_Exe
  Scenario Outline: TC_04- To validate the SignUp functionality in the DeadlyPonies application
   When user completes onboarding flow
    When user launches the website "<url>"
    Then user clicks close pop in deadlyponies
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website

    Examples: 
      | url                                         |
      | https://deadlyponies.com/accounts/register/ |
