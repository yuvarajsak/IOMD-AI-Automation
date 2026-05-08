Feature: To Validate the autofill option and interaction are getting captured correctly in the Walmart application

  @all
  Scenario Outline: TC_01- To validate autofill option and interaction are getting captured in the Walmart application
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
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    When user enters random email in Email Id textbox
    And user clicks "<createaccount>" button by name with "<index>" in the Website
    Then user accepts the popup
    Then user accepts the popup
    And user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Login from interaction tab

    #And user verifies the Anonymous email data is captured in the IOMD Transactions
    Examples: 
      | url                                   | continue btn | business | createaccount  | index |
      | https://www.walmart.com/account/login | Continue     | Walmart  | Create Account |     2 |

  @all
  Scenario Outline: TC_02- To validate SignIn functionality in the Walmart application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user clicks "<continue btn>" button by only name in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                   | continue btn |
      | https://www.walmart.com/account/login | Continue     |
