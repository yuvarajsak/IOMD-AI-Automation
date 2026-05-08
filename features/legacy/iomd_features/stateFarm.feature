Feature: To Validate the autofill option and interaction are getting captured correctly in the StateFarm application

  #we cannot capture interaction as it requires appropriate info for creating an account
  @all
  Scenario Outline: TC_01- To validate the login functionality in the StateFarm application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<MyAccount>" button by only name in the Website
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                       | MyAccount |
      | https://www.statefarm.com | login     |

  @all
  Scenario Outline: TC_02- To validate the forget password functionality in the StateFarm application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<MyAccount>" button by name in the Website
    And user clicks "<ForgotPassword>" button by only Staictext in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Phonenumber from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                       | MyAccount | ForgotPassword      |
      | https://www.statefarm.com | login     | Trouble logging in? |

  @all
  Scenario Outline: TC_03- To validate the SignUp functionality in the StateFarm application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<MyAccount>" button by name in the Website
    And user clicks "<Signup>" button by only Staictext in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Phonenumber from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                       | MyAccount | Signup            |
      | https://www.statefarm.com | login     | Create an account |
