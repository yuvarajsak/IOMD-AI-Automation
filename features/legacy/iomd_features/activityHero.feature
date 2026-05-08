Feature: To Validate the autofill option and interaction are getting captured correctly in the ActivityHero application

  #unable to capture elements for signin - so perequisite - create account for token email and run the scripts for signin
  @all @dyn_Exe  @sample
  Scenario Outline: TC_01- To validate the login functionality in the ActivityHero application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<SignIn>" link by value in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                           | SignIn  |
      | https://www.activityhero.com/ | Sign In |

  @all @dyn_Exe @act
  Scenario Outline: TC_02- To validate the forget password functionality in the ActivityHero application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user clicks "<sendbtn>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    #And user verifies Others from interaction tab
    And user verifies Checkout from interaction tab

    Examples: 
      | url                                             | sendbtn                             | business     |
      | https://www.activityhero.com/users/password/new | Send me reset password instructions | Activityhero |

  @all @dyn_Exe
  Scenario Outline: TC_03- To validate the Newsletter functionality in the ActivityHero application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Address from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website
    And user clicks "<sendbtn>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    #And user verifies Others from interaction tab
    And user verifies Checkout from interaction tab

    Examples: 
      | url                                             | sendbtn | business     |
      | https://www.activityhero.com/users/password/new | Sign up | Activityhero |

  @all @dyn_Exe
  Scenario Outline: TC_04- To validate the SignUp functionality in the ActivityHero application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<SignIn>" link by value in the Website
    And user clicks "<SignUp>" button by only name in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    And user selects personal Address from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website

    Examples: 
      | url                           | SignIn  | SignUp               |
      | https://www.ActivityHero.com/ | Sign In | Create a new Account |
