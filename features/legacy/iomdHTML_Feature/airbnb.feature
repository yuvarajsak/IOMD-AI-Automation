Feature: I2i_Validates autofill functionality in Airbnb website

 @iomd_htmlTest @all_html
  Scenario Outline: TC User validate autofill functionality in Airbnb
    When user completes onboarding flow with card data
    When user launches the website "<url>"
    Then user clicks "<SignIn>" button by only name in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user selects personal Username from Extension
    And user selects personal Phonenumber from Extension
    Then user clicks Fill button from Extension
    And user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal Phonenumber are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    And user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user clicks "<payment>" button by only name in the Website
    When user enables the Extension
    And user selects card details
    Then user clicks Fill button from Extension
    And user verifies the auto fill details for card number are filled as expected for the Website
    

    Examples: 
      | url                                   | SignIn            | payment |
      | https://iomdqaenv.web.app/airbnb.html | Sign Up and Login | Payment |

  @iomd_html @all @airbnb_html
  Scenario Outline: TC_01 User validate autofill functionality on signin form in Airbnb
    When user completes onboarding flow
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the website "<url>"
    Then user clicks "<SignIn>" button by only name in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user selects personal Username from Extension
    And user selects personal Phonenumber from Extension
    Then user clicks Fill button from Extension
    And user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal Phonenumber are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    And user verifies the auto fill details for personal LastName are filled as expected for the Website
    

    Examples: 
      | url                                   | SignIn            |
      | https://iomdqaenv.web.app/airbnb.html | Sign Up and Login |

  @iomd_html @all @airbnb_html
  Scenario Outline: TC_05 User validate autofill functionality on payment form in Airbnb
    When user completes onboarding flow with card data
    When user launches the website "<url>"
    Then user clicks "<payment>" button by only name in the Website
    When user enables the Extension
    And user selects card details
    Then user clicks Fill button from Extension
    And user verifies the auto fill details for card number are filled as expected for the Website

    Examples: 
      | url                                   | payment |
      | https://iomdqaenv.web.app/airbnb.html | Payment |
