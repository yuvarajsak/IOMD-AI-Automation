Feature: To Validate the autofill option and interaction are getting captured correctly in the Schwab application

  ##SignIn and forget password requires ID which is not email and hence not automating it
  #and interaction cannot be captured as it requires appropriate data to move further
  @all
  Scenario Outline: TC_04- To validate the SignUp functionality in the Schwab application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<account>" button by name in the Website
    And user clicks "<start>" button by only name in the Website
    #And user scroll to contact info in schwab application
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    And user selects personal Phonenumber from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user verifies the auto fill details for personal Phonenumber with format are filled as expected for the Website

    Examples: 
      | url                                     | account                      | start       |
      | https://www.schwab.com/open-an-account/ | Individual Brokerage Account | Get started |
