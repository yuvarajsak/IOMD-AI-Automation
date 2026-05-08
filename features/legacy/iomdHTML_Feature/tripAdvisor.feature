Feature: I2i_Validates autofill functionality in TripAdvisor website

  @iomd_html @all @tripAdvisor_html
  Scenario Outline: TC_01 User validate autofill functionality on signin form in TripAdvisor
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
      | url                                        | SignIn  |
      | https://iomdqaenv.web.app/tripAdvisor.html | Sign In |

  @iomd_html @all @tripAdvisor_html
  Scenario Outline: TC_02 User validate autofill functionality on signup form in TripAdvisor
    When user completes onboarding flow
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the website "<url>"
    Then user clicks "<Signup>" button by only name in the Website
    When user enables the Extension
    Then user selects personal Username from Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    And user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    And user verifies the auto fill details for personal LastName are filled as expected for the Website

    Examples: 
      | url                                        | Signup  |
      | https://iomdqaenv.web.app/tripAdvisor.html | Sign Up |

  @iomd_html @all @tripAdvisor_html
  Scenario Outline: TC_03 User validate autofill functionality on forgotpassword form in TripAdvisor
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
      | url                                        | Forgotpassword  |
      | https://iomdqaenv.web.app/tripAdvisor.html | Forgot Password |

  @iomd_html @all @tripAdvisor_html
  Scenario Outline: TC_04 User validate autofill functionality on checkout form in TripAdvisor
    When user completes onboarding flow with card data
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the website "<url>"
    Then user clicks "<checkout>" button by only name in the Website
    When user enables the Extension
    Then user selects personal Username from Extension
    And user selects personal Address from Extension
    And user selects tokenised Email from Extension
    And user selects personal Phonenumber from Extension
    And user selects card details
    Then user clicks Fill button from Extension
    And user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    And user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user verifies the auto fill details for personal Phonenumber are filled as expected for the Website
    Then user verifies the auto fill details for Country are filled as expected for the Website
    And user verifies the auto fill details for card number are filled as expected for the Website

    Examples: 
      | url                                        | checkout |
      | https://iomdqaenv.web.app/tripAdvisor.html | Checkout |
