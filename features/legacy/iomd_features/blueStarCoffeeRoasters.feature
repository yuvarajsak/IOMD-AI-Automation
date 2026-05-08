Feature: To Validate the autofill option and interaction are getting captured correctly in the BlueStarCoffeeRoasters application

  @all @dyn_Exe
  Scenario Outline: TC_01- To validate the login functionality in the BlueStarCoffeeRoasters application
   When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
     And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website


    Examples: 
      | url                                              |
      | https://bluestarcoffeeroasters.com/account/login |

  @all @dyn_Exe
  Scenario Outline: TC_02- To validate the forget password functionality in the BlueStarCoffeeRoasters application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<ForgotPassword>" button by only name in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website


    Examples: 
      | url                                              | ForgotPassword        |
      | https://bluestarcoffeeroasters.com/account/login | Forgot your password? |

  @all @dyn_Exe @blue
  Scenario Outline: TC_03- To validate the SignUp functionality in the BlueStarCoffeeRoasters application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    When user enters data in signup page for BlueStarCoffee website
    And user clicks "<createaccount>" button by name with "<index>" in the Website
     Then user accepts the popup
    Then user accepts the popup
    And user switches back to the IOMD application
   And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Register from interaction tab

    Examples: 
      | url                                                 | createaccount | index | business               |
      | https://bluestarcoffeeroasters.com/account/register | Create        |     4 | Bluestarcoffeeroasters |
