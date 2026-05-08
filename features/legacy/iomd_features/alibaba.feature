Feature: To Validate the autofill option and interaction are getting captured correctly in the AliBaba application

  #Closing Pop-up will not work sometimes coz address is invalid
  @all @dyn_Exe
  Scenario Outline: TC_01- To validate the login functionality in the AliBaba application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user close the popup in Alibaba website
    And user clicks "<MyAccount>" button by name in the Website
    And user clicks "<SignIn>" button by only Staictext in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                     | MyAccount  | SignIn              |
      | https://www.alibaba.com | My Alibaba | Sign In or Register |

  @all @dyn_Exe
  Scenario Outline: TC_02- To validate the forget password functionality in the AliBaba application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user close the popup in Alibaba website
    And user clicks "<MyAccount>" button by name in the Website
    And user clicks "<SignIn>" button by only Staictext in the Website
    And user clicks "<ForgotPassword>" button by only Staictext in the Website
    And user clicks "<clickLink>" button by only Staictext in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                     | MyAccount  | SignIn              | ForgotPassword  | clickLink           |
      | https://www.alibaba.com | My Alibaba | Sign In or Register | Forget Password | Get My 1-Click Link |

  @all @dyn_Exe
  Scenario Outline: TC_03- To validate the SignUp functionality in the AliBaba application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user close the popup in Alibaba website
    And user clicks "<MyAccount>" button by name in the Website
    And user clicks "<SignIn>" button by only Staictext in the Website
    And user clicks "<SignUp>" button by only Staictext in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    And user selects personal Address from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website

    Examples: 
      | url                     | SignUp   | MyAccount  | SignIn              | ForgotPassword  |
      | https://www.alibaba.com | Register | My Alibaba | Sign In or Register | Forget Password |
