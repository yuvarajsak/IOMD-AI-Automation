Feature: To Validate the autofill option and interaction are getting captured correctly in the Nationwide application

  #Signup & forget password and user name navigates to the same page
  @all
  Scenario Outline: TC_01- To validate the SignIn functionality in the Nationwide application
    When user completes onboarding flow
    When user launches the website "<url>"
    Then user accepts the accept all cookies button
    When user enters data in signin page for Nationwide website
    Then user accepts the popup
    Then user accepts the popup
    And user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Login from interaction tab

    Examples: 
      | url                                       | business   |
      | https://www.nationwide.com/personal/login | Nationwide |

  @all
  Scenario Outline: TC_01- To validate the SignUp functionality in the Nationwide application
    When user completes onboarding flow
    When user launches the website "<url>"
    Then user accepts the accept all cookies button
    When user enters data in signup page for Nationwide website
    When user enables the Extension
    And user selects personal Username from Extension
    And user selects personal Address from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website

    Examples: 
      | url                                                                                        |
      | https://customer-login.nationwide.com/registration/search/account-type?loginType=insurance |
