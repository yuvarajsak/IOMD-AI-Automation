Feature: To Validate the autofill option and interaction are getting captured correctly in the eTrade application

  ## create account  has some issues with website ... showing online support when creating
  @all
  Scenario Outline: TC_01- To validate the login functionality in the eTrade application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                  |
      | https://us.etrade.com/e/t/user/login |

  @all
  Scenario Outline: TC_02- To validate the forget username functionality in the eTrade application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user clicks "<forgotUserID>" button by StaticText with "<index>" in the Website
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user clicks "<submit>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    And user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Others from interaction tab

    Examples: 
      | url                                  | forgotUserID | index | submit | business |
      | https://us.etrade.com/e/t/user/login | User ID      |     2 | Submit | Etrade   |
