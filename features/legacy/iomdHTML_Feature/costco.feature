Feature: I2i_Validates autofill functionality in Costco website

  @iomd_htmlTest @all_html
  Scenario Outline: TCs User validate autofill functionality in Costco
    When user completes onboarding flow with card data
    When user launches the website "<url>"
    Then user clicks "<SignIn>" button by only name in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    And user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user clicks "<Signup>" button by only name in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    And user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user clicks "<Forgotpassword>" button by only name in the Website
    When user enables the Extension
    Then user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                   | SignIn  | Signup  | Forgotpassword  |
      | https://iomdqaenv.web.app/costco.html | Sign In | Sign Up | Forgot Password |

  @iomd_html @all
  Scenario Outline: TC_01 User validate autofill functionality on signin form in Costco
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
      | https://iomdqaenv.web.app/costco.html | Sign In |

  @iomd_html @all
  Scenario Outline: TC_02 User validate autofill functionality on signup form in Costco
    When user completes onboarding flow
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the website "<url>"
    Then user clicks "<Signup>" button by only name in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    And user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                   | Signup  |
      | https://iomdqaenv.web.app/costco.html | Sign Up |

  @iomd_html @all
  Scenario Outline: TC_03 User validate autofill functionality on forgotpassword form in Costco
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
      | https://iomdqaenv.web.app/costco.html | Forgot Password |
