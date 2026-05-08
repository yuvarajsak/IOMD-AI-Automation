Feature: Sample login

  Scenario Outline: Login with valid user
    Given user launches the application
    When user enters "<username>" in the username field
    And user enters "<password>" in the password field
    Then user taps the login button
    And user verifies "<message>" is displayed

    Examples:
      | username | password | message |
      | demo     | pass123  | Welcome |
