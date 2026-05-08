Feature: To validate the user is able to the add the detaiils if user is force stoping the application

  Scenario Outline: TC_01- To validate the user is getting the details in the extension if user force stops the application
    When user enters the "<emailId>" in the inputbox
    Then user clicks on the fetch button
    When user force stops the application
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
     When user launches the coravin website "<url>"
    Then user clicks on the signInOrSignUpButton in the coravin website
    When user clicks create account button
    When user enables the extension and verifies the expected details are present for the page
    Then user selects the value from the extension and clicks on the fill button
    When user verifies the details are getting entered as expected in the field box

    Examples: 
      | emailId | url | signUp |
      |         |     |        |
