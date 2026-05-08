Feature: To Validate the autofill option and interaction are getting captured correctly in the Geico application

  # interaction captures are not automated because , it throws incorrect data error. hence just auto filling is automated in signup and forget password forms
  @all
  Scenario Outline: TC_01- To validate the SignIn functionality in the Geico application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects personal Address from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website
    When user launches the website "<signupurl>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    When user launches the website "<forgeturl>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    When user launches the website "<signupurl>"
    When user enables the Extension
    And user selects personal Address from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website

    Examples: 
      | url                   | signupurl                     | forgeturl                        | signupurl                          |
      | https://www.geico.com | https://ecams.geico.com/login | https://ecams.geico.com/recovery | https://ecams.geico.com/activation |

  