Feature: I2i_Validates autofill functionality in hertz website

  @iomd_html1 @all
  Scenario Outline: TC_01 User validate autofill functionality on signin form in Hertz
    When user completes onboarding flow
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the website "<url>"
    Then user clicks "<NextInsurance>" button by only name in the Website
    When user enables the Extension
    Then user selects personal Username from Extension
    And user selects personal Address from Extension
    And user selects personal Phonenumber from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    And user verifies the auto fill details for personal LastName are filled as expected for the Website
    And user verifies the auto fill details for personal Address1 are filled as expected for the website
    And user verifies the auto fill details for personal Phonenumber are filled as expected for the Website

    Examples: 
      | url                                          | checkout |
      | https://iomdqaenv.web.app/nextInsurance.html | Checkout |
