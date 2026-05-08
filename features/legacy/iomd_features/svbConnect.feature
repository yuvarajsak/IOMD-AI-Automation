Feature: To Validate the autofill option and interaction are getting captured correctly in the SVBConnect application

  @all @dyn_Exe
  Scenario Outline: TC_01- To validate the login functionality in the SVBConnect application
    When user completes onboarding flow
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                              |
      | https://www.svbconnect.com/auth/ |

  @all @dyn_Exe
  Scenario Outline: TC_02- To validate the forget password functionality in the SVBConnect application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<Password>" button by StaticText with "<Index>" in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                              | Password | Index |
      | https://www.svbconnect.com/auth/ | Password |     2 |

  @all @dyn_Exe
  Scenario Outline: TC_03- To validate the SignUp functionality in the SVBConnect application
    When user completes onboarding flow with card data
    When user launches the website "<url>"
    And user clicks "<Registernow>" button by only Staictext in the Website
    And user clicks "<Register>" button by only name in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    When user enables the Extension
    And user selects card details
    Then user clicks Fill button from Extension
    #When user Fills the card details in SVBConnect website
    And user clicks "<Next>" button by name with "<index>" in the Website
    Then user accepts the popup
    Then user accepts the popup
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Checkout from interaction tab
    And user clicks "<purchase>" button by only Staictext in the Website
    And user verifies the recent record under purchase tab

    Examples: 
      | url                                             | Register | Next | Registernow  | index | business   |
      | https://www.svbconnect.com/cc/jsp/Business.html | Register | Next | Register Now |     1 | Svbconnect |
