Feature: To Validate the autofill option and interaction are getting captured correctly in the AllState application

  #Signup, forget password and user name is under maitenance
  @all
  Scenario Outline: TC_01- To validate the SignIn functionality in the AllState application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<LogIn>" button by name with "<Index>" in the Website
    When user enters data in signin page for AllState website
    And user clicks "<login>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    And user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Login from interaction tab

    Examples: 
      | url                      | business | LogIn  | Index | login  | notnow  |
      | https://www.allstate.com | Allstate | Log in |     1 | log in | Not Now |
