Feature: To Validate the autofill option and interaction are getting captured correctly in the ClipperCard application

  @all @dyn_Exe @Clipper
  Scenario Outline: TC_01- To validate the login functionality in the ClipperCard application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    When user enters data in Login page for ClipperCard website
    And user clicks "<continuebtn>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    And user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Login from interaction tab

    Examples: 
      | url                                               | continuebtn | business    |
      | https://www.clippercard.com/ClipperWeb/login.html | CONTINUE    | Clippercard |

  @all @dyn_Exe
  Scenario Outline: TC_02- To validate the forget password functionality in the ClipperCard application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                                         |
      | https://www.clippercard.com/ClipperWeb/forgot-password.html |

  @all @dyn_Exe
  Scenario Outline: TC_03- To validate the SignUp functionality in the ClipperCard application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                                             |
      | https://www.clippercard.com/ClipperWeb/create-account-load.html |
