Feature: To Validate the autofill option and interaction are getting captured correctly in the PorterAndYork application

  @all
  Scenario Outline: TC_01- To validate the login functionality in the PorterAndYork application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                   |
      | https://porterandyork.com/my-account/ |

  @all
  Scenario Outline: TC_02- To validate the forget password functionality in the PorterAndYork application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks "<ForgotPassword>" button by only Staictext in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                   | ForgotPassword      |
      | https://porterandyork.com/my-account/ | Lost your password? |

  @all
  Scenario Outline: TC_03- To validate the SignUp functionality in the PorterAndYork application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                   |
      | https://porterandyork.com/my-account/ |

  @all
  Scenario Outline: TC_04- To validate the Checkout functionality in the PorterAndYork application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user selects first product from PorterAndYork application
    And user clicks "<cart>" button by only name in the Website
    When user launches the website "<carturl>"
    And user clicks "<proceedcheckout>" button by only Staictext in the Website
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
    When user enables the Extension
    And user selects card details
    Then user clicks Fill button from Extension
    #When user Fills the card details in PorterAndYork website
    And user clicks "<placeorder>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    And user switches back to the IOMD application
     And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    #And user verifies Checkout from interaction tab
    And user clicks "<purchase>" button by only Staictext in the Website
    And user verifies the recent record under purchase tab


    Examples: 
      | url                                                         | purchase  |business    | cart        | carturl                         | proceedcheckout     | placeorder  |
      | https://porterandyork.com/product-category/buy-beef-online/ | purchases |Porter&york | Add to cart | https://porterandyork.com/cart/ | Proceed to checkout | Place order |
