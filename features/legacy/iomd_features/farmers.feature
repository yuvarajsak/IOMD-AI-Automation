Feature: To Validate the autofill option and interaction are getting captured correctly in the Farmers application


  #SignIn and interaction captures are not automated because , it throws incorrect data error. hence just auto filling is automated in signup and forget password forms
  @all
  Scenario Outline: TC_01- To validate the SignUp functionality in the Farmers application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects personal Username from Extension
    And user selects personal Address from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website

    Examples: 
      | url                                      |
      | https://www.farmers.com/css/registration |

  @all
  Scenario Outline: TC_01- To validate the Forget Username functionality in the Farmers application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects personal Username from Extension
    And user selects personal Address from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website
    When user launches the website "<url2>"
    When user enables the Extension
    And user selects personal Address from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website

    Examples: 
      | url                                                           | url2                                                           |
      | https://www.farmers.com/css/forgotuserpassword/forgotusername | https://www.farmers.com/css/forgotuserpassword/recoverUsername |
