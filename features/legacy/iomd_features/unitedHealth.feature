Feature: To Validate the autofill option and interaction are getting captured correctly in the UnitedHealth application

  #signin and create account cannot capture interaction ..requires personal data
  @all @iomd_Pay @uniq
  Scenario Outline: TC_01- To validate the SignIn functionality in the UnitedHealth application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<SignIn>" button by only name in the Website
    And user clicks "<planbtn>" button by only name in the Website
    And user clicks "<SignIn>" button by name in the Website
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    #When user enters data in signin page for UnitedHealth website
    #And user clicks "<Signinbtn>" button by only name in the Website
    #Then user accepts the save credential popup for autologin in IOMD Profile
    #And user switches back to the IOMD application
    #And user verifies and clicks on the business tab
    #And user clicks "<business>" business by only name in the IOMD Transactions
    #And user verifies and clicks on Login from interaction tab
    Examples: 
      | url                 | business      | SignIn  | planbtn                                          | Signinbtn |
      | https://www.uhc.com | Healthsafe-id | Sign In | Plan through your employer? Sign in to myuhc.com | Sign in   |

  @all
  Scenario Outline: TC_02- To validate the forget username functionality in the UnitedHealth application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<SignIn>" button by only name in the Website
    And user clicks "<planbtn>" button by only name in the Website
    And user clicks "<SignIn>" button by name in the Website
    And user clicks "<ForgotPassword>" button by only Staictext in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website

    Examples: 
      | url                 | ForgotPassword | SignIn  | planbtn                                          |
      | https://www.uhc.com | username       | Sign In | Plan through your employer? Sign in to myuhc.com |

  @all
  Scenario Outline: TC_02- To validate the forget password functionality in the UnitedHealth application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<SignIn>" button by only name in the Website
    And user clicks "<planbtn>" button by only name in the Website
    And user clicks "<SignIn>" button by name in the Website
    And user clicks "<ForgotPassword>" button by only Staictext in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website

    Examples: 
      | url                 | ForgotPassword | SignIn  | planbtn                                          |
      | https://www.uhc.com | password       | Sign In | Plan through your employer? Sign in to myuhc.com |

  @all
  Scenario Outline: TC_03- To validate the SignUp functionality in the UnitedHealth application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<SignIn>" button by only name in the Website
    And user clicks "<planbtn>" button by only name in the Website
    And user clicks "<Register>" button by name in the Website
    When user enables the Extension
    And user selects personal Username from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website

    Examples: 
      | url                 | SignIn  | planbtn                                          | Register |
      | https://www.uhc.com | Sign In | Plan through your employer? Sign in to myuhc.com | Register |
