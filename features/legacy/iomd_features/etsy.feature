Feature: To Validate the autofill option and interaction are getting captured correctly in the Etsy application

  @all
  Scenario Outline: TC_01- To validate autofill option and interaction are getting captured in the Etsy application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    When user enters random email in Email Id textbox
    And user clicks "<continue btn>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    When user enables the Extension
    And user selects personal Username from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    And user enters password in the signup page of Etsy
    And user clicks "<createaccount>" button by name with "<index>" in the Website
   Then user accepts the popup
    Then user accepts the popup
    And user switches back to the IOMD application
    Then user clicks on the fetch button
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Register from interaction tab

    Examples: 
      | url                              | continue btn | business | createaccount | index |
      | https://www.etsy.com/join/email? | Continue     | Etsy     | Register      |     3 |
