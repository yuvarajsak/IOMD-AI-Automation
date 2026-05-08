Feature: To Validate the autofill option and interaction are getting captured correctly in the TD Ameritrade application

#Interaction captures are not automated because , it throws incorrect data error. hence just auto filling is automated.

  @all
  Scenario Outline: TC_01- To validate the login functionality in the TD Ameritrade application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<Login>" button by name with "<index>" in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                          | Login  | index |
      | https://www.tdameritrade.com | Log in |     1 |

  @all
  Scenario Outline: TC_02- To validate the forget password functionality in the TD Ameritrade application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<Login>" button by name with "<index>" in the Website
    And user clicks "<forgotPassword>" button by only Staictext in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Address from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website

    Examples: 
      | url                          | forgotPassword   | Login  | index |
      | https://www.tdameritrade.com | Forgot password? | Log in |     1 |

  @all
  Scenario Outline: TC_03- To validate the forget username functionality in the TD Ameritrade application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<Login>" button by name with "<index>" in the Website
    And user clicks "<forgotPassword>" button by only Staictext in the Website
    When user enables the Extension
    And user selects personal Username from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website

    Examples: 
      | url                          | forgotPassword  | Login  | index |
      | https://www.tdameritrade.com | Forgot user ID? | Log in |     1 |

  @all
  Scenario Outline: TC_04- To validate the SignUp functionality in the TD Ameritrade application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<Close>" button by only name in the Website
    And user clicks "<selectAcc>" button by only name in the Website
    And user clicks "<accType>" button by only name in the Website
    And user clicks "<openAcc>" button by only name in the Website
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
    Then user verifies the auto fill details for personal Phonenumber are filled as expected for the Website

    Examples: 
      | url                                 | selectAcc         | accType                  | openAcc                    | Close |
      | https://start.tdameritrade.com/open | Select an account | Details about Individual | Open an individual account | Close |
