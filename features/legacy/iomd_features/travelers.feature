Feature: To Validate the autofill option and interaction are getting captured correctly in the Travelers application

  #Interaction captures are not automated because , it throws incorrect data error. hence just auto filling is automated.
  @all @iomd_Pay
  Scenario Outline: TC_01- To validate the SignIn functionality in the Travelers application
    When user completes onboarding flow
    When user launches the website "<homeurl>"
    When user enables the Extension
    And user selects personal Address from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    #When user enters data in signin page for Travelers website
    #And user clicks "<SignIn>" button by only name in the Website
    #Then user accepts the save credential popup for autologin in IOMD Profile
    #And user switches back to the IOMD application
    #And user verifies and clicks on the business tab
    #And user clicks "<business>" business by only name in the IOMD Transactions
    #And user verifies and clicks on Login from interaction tab
    Examples: 
      | url                          | homeurl                   | business  | SignIn  |
      | https://signin.travelers.com | https://www.travelers.com | Travelers | SIGN IN |

  @all
  Scenario Outline: TC_02- To validate the forget password functionality in the Travelers application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<Forgetbutton>" button by name with "<index>" in the Website
    And user clicks "<ForgotPassword>" button by name with "<index>" in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user clicks "<cancel>" button by name with "<index>" in the Website
    And user clicks "<Forgetbutton>" button by name with "<index>" in the Website
    And user clicks "<ForgotUid>" button by name with "<index>" in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                | ForgotPassword  | Forgetbutton          | index | cancel | ForgotUid      |
      | https://selfservice.travelers.com/ | Forgot Password | NEED HELP SIGNING IN? |     2 | Cancel | Forgot User ID |

  @all
  Scenario Outline: TC_03- To validate the SignUp functionality in the Travelers application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<Choosebutton>" button by only Staictext in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    And user clicks "<Create>" button by only name in the Website
    And user switches back to the IOMD application
  And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Others from interaction tab

    Examples: 
      | url                                | Create            | business  | Choosebutton          |
      | https://www.travelers.com/register | CREATE MY ACCOUNT | Travelers | FOR INJURED EMPLOYEES |
