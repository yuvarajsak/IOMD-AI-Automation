Feature: To Validate the autofill option and interaction are getting captured correctly in the AdvancedCustomFields application

  #they have added robot captcha check , hence interactions cannot be captured
  @all @dyn_Exe
  Scenario Outline: TC_01- To validate the login functionality in the AdvancedCustomFields application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<gotit>" button by only Staictext in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    #When user fills Email for ACF website
    #And user clicks "<loginbtn>" button by only name in the Website
    #And user accepts the save credential popup for autologin in IOMD Profile
    #And user switches back to the IOMD application
    #And user verifies and clicks on the business tab
    #And user clicks "<business>" business by only name in the IOMD Transactions
    #And user verifies Login from interaction tab
    Examples: 
      | url                                              | business             | loginbtn | gotit  |
      | https://www.advancedcustomfields.com/my-account/ | Advancedcustomfields | Log in   | Got it |

  @all @dyn_Exe
  Scenario Outline: TC_02- To validate the forget password functionality in the AdvancedCustomFields application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<gotit>" button by only Staictext in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                                            | gotit  |
      | https://www.advancedcustomfields.com/my-account/lost-password/ | Got it |

  @all @dyn_Exe
  Scenario Outline: TC_03- To validate the SignUp functionality in the AdvancedCustomFields application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<gotit>" button by only Staictext in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                                | Register | gotit  |
      | https://support.advancedcustomfields.com/register/ | Register | Got it |
