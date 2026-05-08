Feature: To Validate the autofill option and interaction are getting captured correctly in the TripAdvisor application

  @all
  Scenario Outline: TC_01- To validate the login functionality in the TripAdvisor application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<MyAccount>" button by name in the Website
    And user clicks "<SignIn>" button by name in the Website
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                                | MyAccount           | SignIn                                  |
      | https://www.tripadvisor.com/RegistrationController | Continue with email | Sign in using your Tripadvisor account. |

  @all
  Scenario Outline: TC_02- To validate the forget password functionality in the TripAdvisor application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<MyAccount>" button by name in the Website
    And user clicks "<SignIn>" button by name in the Website
    And user clicks "<ForgotPassword>" button by name in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user clicks "<sendlink>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Others from interaction tab

    Examples: 
      | url                                                | MyAccount           | ForgotPassword   | SignIn                                  | sendlink  | business    |
      | https://www.tripadvisor.com/RegistrationController | Continue with email | Forget password? | Sign in using your Tripadvisor account. | Send link | Tripadvisor |

  @all
  Scenario Outline: TC_03- To validate the SignUp functionality in the TripAdvisor application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<MyAccount>" button by name in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website

    Examples: 
      | url                                                | MyAccount           |
      | https://www.tripadvisor.com/RegistrationController | Continue with email |
