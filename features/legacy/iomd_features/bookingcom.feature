Feature: To Validate the autofill option and interaction are getting captured correctly in the Booking application

  @all @dyn_Exe 
  Scenario Outline: TC_01- To validate autofill option and interaction are getting captured in the Booking application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    When user enters random email in Email Id textbox for booking website
    And user clicks "<continue btn>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    And user fills password for booking website
    And user clicks "<createaccbtn>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    And user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Register from interaction tab

    Examples: 
      | url                                  | continue btn        | business | createaccbtn   |
      | https://account.booking.com/sign-in? | Continue with email | Booking  | Create account |
