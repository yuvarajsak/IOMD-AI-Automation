Feature: To Validate the autofill option and interaction are getting captured correctly in the Laperla application

  @all
  Scenario Outline: TC_01- To validate the login functionality in the Laperla application
    When user completes onboarding flow
    When user launches the website "<loginurl>"
    Then user accepts the accept all cookies button
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | loginurl                             | url                                          |
      | https://global.laperla.com/login.php | https://global.laperla.com/?setCurrrencyId=9 |

  @all
  Scenario Outline: TC_02- To validate the forget password functionality in the Laperla application
    When user completes onboarding flow
    When user launches the website "<reseturl>"
    Then user accepts the accept all cookies button
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user clicks "<resetbtn>" button by name with "<index>" in the Website
    Then user accepts the popup
    Then user accepts the popup
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Others from interaction tab

    Examples: 
      | reseturl                                                   | url                                          | resetbtn       | index | business |
      | https://global.laperla.com/login.php?action=reset_password | https://global.laperla.com/?setCurrrencyId=9 | Reset Password |     3 | Laperla  |

  @all
  Scenario Outline: TC_03- To validate the SignUp functionality in the Laperla application
    When user completes onboarding flow
    When user launches the website "<signinurl>"
    Then user accepts the accept all cookies button
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    And user selects personal Phonenumber from Extension
    And user selects personal Address from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website
    Then user verifies the auto fill details for personal Phonenumber with format are filled as expected for the Website

    Examples: 
      | signinurl                                                  | url                                          |
      | https://global.laperla.com/login.php?action=create_account | https://global.laperla.com/?setCurrrencyId=9 |
