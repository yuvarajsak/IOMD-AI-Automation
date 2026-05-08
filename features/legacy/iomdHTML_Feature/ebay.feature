Feature: I2i_Validates autofill functionality in Ebay website

#Business accoount - Country is not autofilling in signup
  @iomd_htmlTest @all
  Scenario Outline: TCs_01 User validate autofill functionality on signup in Ebay
    When user completes onboarding flow
    When user launches the website "<url>"
    Then user clicks "<Signup>" button by only name in the Website
    When user enables the Extension
    Then user selects personal Username from Extension
    And user selects tokenised Email from Extension
    And user selects personal Address from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user verifies the auto fill details for personal FirstName are filled as expected for the Website
    And user verifies the auto fill details for personal LastName are filled as expected for the Website
    And user verifies the auto fill details for Country are filled as expected for the Website
    
		
    Examples: 
      | url                                 | Signup  |
      | https://iomdqaenv.web.app/ebay.html | Sign Up |

  @iomd_html @all
  Scenario Outline: TC_02 User validate autofill functionality on signin form in Ebay
    When user completes onboarding flow
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the website "<url>"
    Then user clicks "<SignIn>" button by only name in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    And user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                 | SignIn  |
      | https://iomdqaenv.web.app/ebay.html | Sign In |

#Fullname is filling in both first and last name fields - Card details.
  @iomd_html1 @all
  Scenario Outline: TC_03 User validate autofill functionality on Checkout and Payment in Ebay
    When user completes onboarding flow with card data
    When user launches the website "<url>"
    Then user clicks "<checkout>" button by only name in the Website
    When user enables the Extension
    Then user selects personal Username from Extension
    And user selects personal Address from Extension
    And user selects personal Phonenumber from Extension
    And user selects card details
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    And user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website
    Then user verifies the auto fill details for personal Address1 are filled as expected for the website
    Then user verifies the auto fill details for personal Phonenumber are filled as expected for the Website
    Then user verifies the auto fill details for City are filled as expected for the Website
    Then user verifies the auto fill details for Country are filled as expected for the Website
    And user verifies the auto fill details for State are filled as expected for the Website
    And user verifies the auto fill details for card number are filled as expected for the Website

    Examples: 
      | url                                 | checkout             |
      | https://iomdqaenv.web.app/ebay.html | Checkout And Payment |
