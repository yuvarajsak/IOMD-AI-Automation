Feature: To Validate the autofill option and interaction are getting captured correctly in the MyElementor application

  @all
  Scenario Outline: TC_01- To validate the login functionality in the MyElementor application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                             |
      | https://my.elementor.com/login/ |

  @all
  Scenario Outline: TC_02- To validate the forget password functionality in the MyElementor application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user clicks "<resetbtn>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Others from interaction tab

    Examples: 
      | url                                       | resetbtn       | business  |
      | https://my.elementor.com/forgot-password/ | Reset Password |     Elementor |

  @all
  Scenario Outline: TC_03- To validate the SignUp functionality in the MyElementor application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    When user enters data in signup page for elementor website
    And user clicks "<createbtn>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    And user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Register from interaction tab

    Examples: 
      | url                              | createbtn         | business  |
      | https://my.elementor.com/signup/ | Create my account | Elementor |
