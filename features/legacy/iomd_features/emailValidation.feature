Feature: User to validate email tab and mail's received by the user

  @emailTabFeatureunregistered @emailTabValidation
  Scenario Outline: TC_01 To validate the display of the email tab and in its placeholders with un-registered mail
    Then user verifies the clicks on the transaction tab
    When user verifies the "<Notification>" tab
    Then user clicks on the "<Notification>" tab
    When user verifies the display of the email count text

    Examples: 
      | Notification |
      | Notification |

  @emailTabFeatureregistered @emailTabValidation
  Scenario Outline: TC_02 To validate the display of the email tab and in its placeholders with registered mail
    When user enters the "<emailId>" in the inputbox
    Then user clicks on the fetch button
    Then user verifies the clicks on the transaction tab
    When user verifies the "<Notification>" tab
    Then user clicks on the "<Notification>" tab

    Examples: 
      | emailId          | Notification |
      | hiring@iomd.info | Notification |

  @coravinforgotPassword @emailTabValidation
  Scenario Outline: TC_03- To Validate the display of the mail recveived after clicking the forget password link in coravin feature
    When user enters the "<emailId>" in the inputbox
    Then user clicks on the fetch button
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the coravin website "<url>"
    Then user clicks on the signInOrSignUpButton in the coravin website
    When user clicks on the sign in button
    When user clicks on the forgot password link "<forgotPassword>"
    Then user enters the "<emailId>" in the inputbox and clicks on the submit button
    When user switches back to the IOMD application
    Then user verifies the clicks on the transaction tab
    When user verifies the "<Notification>" tab
    Then user clicks on the "<Notification>" tab
    Then user verifies the display of the forgot email
    When user clicks the mail and verifies the details present inside the tab

    Examples: 
      | emailId          | url                     | forgotPassword | Notification |
      | hiring@iomd.info | https://www.coravin.com | password       | Notification |
