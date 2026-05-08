Feature: I2i_Validates autofill functionality in Farmers website

  @iomd_html @all @farmers_html
  Scenario Outline: TC_01 User validate autofill functionality on signin form in Farmers
    When user completes onboarding flow
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the website "<url>"
    Then user clicks "<SignIn>" button by only name in the Website
    When user enables the Extension
    And user selects personal Username from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal Username are filled as expected for the Website

    Examples: 
      | url                                    | SignIn  |
      | https://iomdqaenv.web.app/farmers.html | Sign In |

  @iomd_html @all @farmers_html
  Scenario Outline: TC_02 User validate autofill functionality on signup form in Farmers
    When user completes onboarding flow
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the website "<url>"
    Then user clicks "<Signup>" button by only name in the Website
    When user enables the Extension
    Then user selects personal Username from Extension
    And user selects personal Address from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised FirstName are filled as expected for the Website
    And user verifies the auto fill details for tokenised LastName are filled as expected for the Website
    And user verifies the auto fill details for personal Zipcode are filled as expected for the Website

    Examples: 
      | url                                    | Signup  |
      | https://iomdqaenv.web.app/farmers.html | Sign Up |

  @iomd_html @all @farmers_html
  Scenario Outline: TC_03 User validate autofill functionality on forgotpassword form in Farmers
    When user completes onboarding flow
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the website "<url>"
    Then user clicks "<Forgotpassword>" button by only name in the Website
    When user enables the Extension
    Then user selects personal Username from Extension
    And user selects personal Address from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised FirstName are filled as expected for the Website
    And user verifies the auto fill details for tokenised LastName are filled as expected for the Website
    And user verifies the auto fill details for personal Zipcode are filled as expected for the Website

    Examples: 
      | url                                    | Forgotpassword  |
      | https://iomdqaenv.web.app/farmers.html | Forgot Password |

  @iomd_html @all @farmers_html
  Scenario Outline: TC_04 User validate autofill functionality on Checkout form in Farmers
    When user completes onboarding flow
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the website "<url>"
    Then user clicks "<Forgotpassword>" button by only name in the Website
    When user enables the Extension
    Then user selects personal Username from Extension
    And user selects personal Address from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised FirstName are filled as expected for the Website
    And user verifies the auto fill details for tokenised LastName are filled as expected for the Website
    And user verifies the auto fill details for personal Zipcode are filled as expected for the Website
    And user verifies the auto fill details for personal Address1 are filled as expected for the website
    And user verifies the auto fill details for City are filled as expected for the Website

    Examples: 
      | url                                    | checkout |
      | https://iomdqaenv.web.app/farmers.html | Checkout |

  @iomd_html @all @farmers_html
  Scenario Outline: TC_05 User validate autofill functionality on Find Agent form in Farmers
    When user completes onboarding flow
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the website "<url>"
    Then user clicks "<findagent>" button by only name in the Website
    When user enables the Extension
    Then user selects personal Address from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website
    And user verifies the auto fill details for City are filled as expected for the Website
    And user verifies the auto fill details for State are filled as expected for the Website

    Examples: 
      | url                                    | findagent  |
      | https://iomdqaenv.web.app/farmers.html | Find Agent |
      
       @iomd_html @all @farmers_html
  Scenario Outline: TC_06 User validate autofill functionality on Homepage form in Farmers
    When user completes onboarding flow
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the website "<url>"
    Then user clicks "<homepage>" button by only name in the Website
    When user enables the Extension
    Then user selects personal Address from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website
   

    Examples: 
      | url                                    | homepage  |
      | https://iomdqaenv.web.app/farmers.html | Home Page |
