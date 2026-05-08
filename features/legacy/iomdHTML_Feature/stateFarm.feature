Feature: I2i_Validates autofill functionality in State Farm website

  @iomd_html @all @stateFarm_html
  Scenario Outline: TC_01 User validate autofill functionality on signin form in State Farm
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
      | url                                      | SignIn  |
      | https://iomdqaenv.web.app/stateFarm.html | Sign In |

  @iomd_html @all @stateFarm_html
  Scenario Outline: TC_02 User validate autofill functionality on signup form in State Farm
    When user completes onboarding flow
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the website "<url>"
    Then user clicks "<Signup>" button by only name in the Website
    When user enables the Extension
    Then user selects personal Phonenumber from Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user verifies the auto fill details for personal Phonenumber are filled as expected for the Website

    Examples: 
      | url                                      | Signup  |
      | https://iomdqaenv.web.app/stateFarm.html | Sign Up |

  @iomd_html @all @stateFarm_html
  Scenario Outline: TC_03 User validate autofill functionality on forgotpassword form in State Farm
    When user completes onboarding flow
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the website "<url>"
    Then user clicks "<Forgotpassword>" button by only name in the Website
    When user enables the Extension
    Then user selects personal Phonenumber from Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user verifies the auto fill details for personal Phonenumber are filled as expected for the Website

    Examples: 
      | url                                      | Forgotpassword  |
      | https://iomdqaenv.web.app/stateFarm.html | Forgot Password |

  @iomd_html @all @stateFarm_html
  Scenario Outline: TC_04 User validate autofill functionality on HomePage form in State Farm
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
      | url                                      | homepage |
      | https://iomdqaenv.web.app/stateFarm.html | HomePage |

  @iomd_html @all @stateFarm_html
  Scenario Outline: TC_05 User validate autofill functionality on Bill Information form in State Farm
    When user completes onboarding flow
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the website "<url>"
    Then user clicks "<billinformation>" button by only name in the Website
    When user enables the Extension
    Then user selects personal Address from Extension
    And user selects personal Phonenumber from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website
    And user verifies the auto fill details for personal Phonenumber are filled as expected for the Website

    Examples: 
      | url                                      | billinformation  |
      | https://iomdqaenv.web.app/stateFarm.html | Bill Information |
