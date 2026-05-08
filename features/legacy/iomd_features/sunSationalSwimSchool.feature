Feature: To Validate the autofill option and interaction are getting captured correctly in the SunsationalSwimSchool application

  @all
  Scenario Outline: TC_03- To validate the ContactUs functionality in the SunsationalSwimSchool application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    And user selects personal Phonenumber from Extension
    And user selects personal Address from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website
    Then user verifies the auto fill details for personal Phonenumber are filled as expected for the Website

    Examples: 
      | url                                           |
      | https://www.sunsationalswimschool.com/contact |
