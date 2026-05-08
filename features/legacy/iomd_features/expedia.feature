Feature: To Validate the autofill option and interaction are getting captured correctly in the Expedia application
# It is now redirecting to OTP verfifcation page, hence just autofill is automated and Forget password page is removed
  @all
  Scenario Outline: TC_01- To validate the login functionality in the Expedia application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                           |
      | https://www.expedia.com/login |

  #@all
  #Scenario Outline: TC_02- To validate the forget password functionality in the Expedia application
    #When user completes onboarding flow
    #When user launches the website "<url>"
    #And user clicks "<forgotPassword>" button by only Staictext in the Website
    #When user enables the Extension
    #And user selects tokenised Email from Extension
    #Then user clicks Fill button from Extension
    #Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
#
    #Examples: 
      #| url                           | forgotPassword   |
      #| https://www.expedia.com/login | Forgot password? |

  @all
  Scenario Outline: TC_03- To validate the SignUp functionality in the Expedia application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    #And user clicks "<Continue>" button by only name in the Website
    #And user clicks "<Sign In>" button by only Staictext in the Website
    #And user selects tokenised Email from Extension
    #And user selects personal Username from Extension
    #Then user clicks Fill button from Extension
    #Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    #Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    #Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    #And user enters password in the signup page of Expedia
    #And user clicks "<Continue>" button by only name in the Website
    #Then user accepts the save Signup credential popup for autologin in IOMD Profile
    #When user switches back to the IOMD application
    #And user verifies and clicks on the business tab
    #And user clicks "<business>" business by only name in the IOMD Transactions
    #And user verifies Register from interaction tab

    Examples: 
      | url                           | Sign In    | Continue | business |
      | https://www.expedia.com/login | Create one | Continue | Expedia  |
