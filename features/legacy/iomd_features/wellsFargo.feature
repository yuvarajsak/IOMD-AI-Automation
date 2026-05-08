Feature: To Validate the autofill option and interaction are getting captured correctly in the WellsFargo application

  ## Create account has limitations regarding security to create account since it asks for card details
  @all
  Scenario Outline: TC_01- To validate the login functionality in the WellsFargo application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<SignIn>" link by value in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                                                           | SignIn  |
      | https://connect.secure.wellsfargo.com/auth/login/present?origin=mobilebrowser | Sign In |

  @all
  Scenario Outline: TC_02- To validate the forget username functionality in the WellsFargo application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<username>" button by only name in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                                         | username    |
      | https://oam.wellsfargo.com/oamo/identity/help/passwordhelp/ | My username |
