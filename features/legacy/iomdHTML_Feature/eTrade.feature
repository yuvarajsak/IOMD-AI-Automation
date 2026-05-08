Feature: I2i_Validates autofill functionality in ETrade website

  @iomd_html @all @eTrade_html
  Scenario Outline: TC_01 User validate autofill functionality on signin form in ETrade
    When user completes onboarding flow
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the website "<url>"
    Then user clicks "<SignIn>" button by only name in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    And user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                   | SignIn  |
      | https://iomdqaenv.web.app/eTrade.html | Sign In |

  @iomd_html @all @eTrade_html
  Scenario Outline: TC_03 User validate autofill functionality on forgotpassword form in ETrade
    When user completes onboarding flow
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the website "<url>"
    Then user clicks "<Forgotpassword>" button by only name in the Website
    When user enables the Extension
    Then user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                   | Forgotpassword  |
      | https://iomdqaenv.web.app/eTrade.html | Forgot Password |

  @iomd_html @all @eTrade_html
  Scenario Outline: TC_04 User validate autofill functionality on Document SignIn form in ETrade
    When user completes onboarding flow
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the website "<url>"
    Then user clicks "<documentsignin>" button by only name in the Website
    When user enables the Extension
    Then user selects personal Username from Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    And user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    And user verifies the auto fill details for personal LastName are filled as expected for the Website

    Examples: 
      | url                                   | documentsignin  |
      | https://iomdqaenv.web.app/eTrade.html | Document SignIn |
