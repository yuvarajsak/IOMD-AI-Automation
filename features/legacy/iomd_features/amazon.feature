Feature: To Validate the autofill option and interaction are getting captured correctly in the Amazon application

  @all @dyn_Exe
  Scenario Outline: TC_01- To validate SignIn functionality in the Amazon application
    When user completes onboarding flow
    When user launches the website "<url>"
    Then user accepts the accept all cookies button
    And user clicks "<signin>" button by only Staictext in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user clicks "<continue>" button by only name in the Website
    And user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Others from interaction tab

    Examples: 
      | url                     | signin    | index | continue | business |
      | https://www.amazon.com/ | Sign in › |     1 | Continue | Amazon   |

  @all @dyn_Exe
  Scenario Outline: TC_02- To validate SignUp functionality in the Amazon application
    When user completes onboarding flow
    When user launches the website "<url>"
    Then user accepts the accept all cookies button
    And user clicks "<signin>" button by only Staictext in the Website
    And user clicks "<createaccount>" button by only name in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    When user enters data in signup page for amazon website
    And user clicks "<continue btn>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    And user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    #And user verifies Register from interaction tab
        And user verifies Login from interaction tab

    Examples: 
      | url                     | continue btn | business | signin    | createaccount                   | index |
      | https://www.amazon.com/ | Verify email | Amazon   | Sign in › | Create account . New to Amazon? |     1 |
