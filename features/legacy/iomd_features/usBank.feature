Feature: To Validate the autofill option and interaction are getting captured correctly in the USBanK application

  ##Forgot password  and create account  has limitations regarding security to create account since it asks for card details
  @all
  Scenario Outline: TC_01- To validate the login functionality in the USBanK application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<login>" button by only name in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                               | login  |
      | https://www.usbank.com/index.html | Log in |
