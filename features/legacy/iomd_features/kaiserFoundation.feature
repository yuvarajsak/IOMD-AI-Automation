Feature: To Validate the autofill option and interaction are getting captured correctly in the KaiserFoundation application

  #signin and create account cannot capture interaction ..requires personal data
  
  @all @iomd_Pay @kaiserfoundationsignin
  Scenario Outline: TC_01- To validate the SignIn functionality in the KaiserFoundation application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                                   |
      | https://healthy.kaiserpermanente.org/consumer-sign-on |

  @all @kaiserfoundationforgotpasswod
  Scenario Outline: TC_02- To validate the forget password functionality in the KaiserFoundation application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<ForgotPassword>" button by only Staictext in the Website
    And user clicks "<ForgotPasswordButton>" button by only Staictext in the Website
    When user enables the Extension
    And user selects personal Username from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website

    Examples: 
      | url                                                   | ForgotPassword                   | ForgotPasswordButton |
      | https://healthy.kaiserpermanente.org/consumer-sign-on | Forgot your User ID or password? | Forgot password      |

  @all @kaiserfoundationforgotusername
  Scenario Outline: TC_02- To validate the forget username functionality in the KaiserFoundation application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<ForgotPassword>" button by only Staictext in the Website
    And user clicks "<ForgotUserIDButton>" button by only Staictext in the Website
    When user enables the Extension
    And user selects personal Username from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website

    Examples: 
      | url                                                   | ForgotPassword                   | ForgotUserIDButton |
      | https://healthy.kaiserpermanente.org/consumer-sign-on | Forgot your User ID or password? | Forgot user ID     |

  @all @kaiserfoundationsignup
  Scenario Outline: TC_03- To validate the SignUp functionality in the KaiserFoundation application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<Register>" button by only Staictext in the Website
    And user clicks "<CreateMyAccountButton>" button by only Staictext in the Website
    When user enables the Extension
    And user selects personal Username from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website

    Examples: 
      | url                                                   | CreateMyAccountButton | Register                |
      | https://healthy.kaiserpermanente.org/consumer-sign-on | Create my account     | Register for an account |
