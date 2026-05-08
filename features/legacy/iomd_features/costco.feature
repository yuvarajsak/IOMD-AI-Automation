Feature: To Validate the autofill option and interaction are getting captured correctly in the Costco application

  @all
  Scenario Outline: TC_01- To validate SignIn functionality in the Costco application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<account>" button by only Staictext in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                    | account |
      | https://www.costco.com | Account |

  @all @costco
  Scenario Outline: TC_01- To validate ForgotPassword functionality in the Costco application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<account>" button by only Staictext in the Website
    And user clicks "<ForgotPassword>" button by only name in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user clicks "<send>" button by only name in the Website
    And user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Register from interaction tab

    #And user verifies Others from interaction tab
    Examples: 
      | url                    | account | ForgotPassword   | send                   | business |
      | https://www.costco.com | Account | Forgot Password? | Send Verification Code | Costco   |

  @all
  Scenario Outline: TC_03- To validate SignUp functionality in the Costco application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<account>" button by only Staictext in the Website
    And user clicks "<createaccount>" button by only Staictext in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                    | account | createaccount  |
      | https://www.costco.com | Account | Create Account |
