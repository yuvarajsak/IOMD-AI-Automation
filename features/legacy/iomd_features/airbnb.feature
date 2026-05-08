Feature: To Validate the autofill option and interaction are getting captured correctly in the AirBnB application

  @all @dyn_Exe 
  Scenario Outline: TC_01- To validate autofill option and interaction are getting captured in the AirBnB application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<continueEmailbtn>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    When user enters random email in Email Id textbox for airbnb website
    And user clicks "<continue>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    When user enables the Extension
    And user selects personal Username from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    And user clicks "<agree>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Others from interaction tab

    Examples: 
      | url                            | continueEmailbtn    | continue | business | agree              |
      | https://www.airbnb.co.in/login | Continue with email | Continue | Airbnb   | Agree and continue |
