Feature: To Validate the autofill option and interaction are getting captured correctly in the Wish application

  @all
  Scenario Outline: TC_01- To validate the login functionality in the Wish application
      When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
     And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Examples: 
      | url                   |
      | https://www.wish.com/ |

  @all
  Scenario Outline: TC_02- To validate the forget password functionality in the Wish application
       When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                  |
      | https://www.wish.com/forgot-password |

  @all
  Scenario Outline: TC_03- To validate the SignUp functionality in the Wish application
      When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<Sign In>" button by only name in the Website
    When user enables the Extension
     And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website

    Examples: 
      | url                   | Sign In |
      | https://www.wish.com/ | Sign Up |
