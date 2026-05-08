Feature: To Validate the autofill option and interaction are getting captured correctly in the RentalManager application
#cannot automate as it requires robo check before we proceed. 
  @all
  Scenario Outline: TC_01- To validate the login functionality in the RentalManager application
    When user completes onboarding flow
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the website "<url>"
    When user enables the Extension
     And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                          |
      | https://admin.rentalmanager.com/rm_login.php |

  @all
  Scenario Outline: TC_02- To validate the forget password functionality in the RentalManager application
    When user completes onboarding flow
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                                   |
      | https://admin.rentalmanager.com/password-recovery.php |

  @all
  Scenario Outline: TC_03- To validate the SignUp functionality in the RentalManager application
     When user completes onboarding flow
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the website "<url>"
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    And user selects personal Phonenumber from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user verifies the auto fill details for personal Phonenumber with format are filled as expected for the Website

    Examples: 
      | url                                                | Sign In |
      | https://admin.rentalmanager.com/create-account.php | Sign Up |
