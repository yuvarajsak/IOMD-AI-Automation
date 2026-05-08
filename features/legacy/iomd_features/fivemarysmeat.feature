Feature: To Validate the autofill option and interaction are getting captured correctly in the fivemarys application

  @all 
  Scenario Outline: TC_01- To validate the login functionality in the fivemarys application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                      |
      | https://fivemarysmeats.com/account/login |

  @all @regression_suiteFivemarysSignup
  Scenario Outline: TC_02- To validate the Signup functionality in the fivemarys application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                         |
      | https://fivemarysmeats.com/account/register |

  @all @regression_suiteFivemarysForgetpassword
  Scenario Outline: TC_03- To validate the forget password functionality in the fivemarys application
    When user completes onboarding flow
    When user launches the website "<url>"
    Then user clicks Forget Password  button in the fivemarys website
    When user enters email in the form
    #When user enables the Extension
    #And user selects tokenised Email from Extension
    #Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user clicks "<submit>" button by only name in the Website
    Then user accepts the popup
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Others from interaction tab

    Examples: 
      | url                                      | submit | business       |
      | https://fivemarysmeats.com/account/login | Submit | Fivemarysmeats |

  @all @FiveMary
  Scenario Outline: TC_04- To validate products in the cart and Checkout functionality in the fivemarys application as a guest user
    When user completes onboarding flow with card data
    When user launches the website "<url>"
    #When user selects first category from product category section
    And user clicks the first product to checkout
    Then user clicks Add to cart button in fivemarys website
    And user clicks checkout option in fivemarys website
    When user enables the Extension
    #And user selects tokenised Email from Extension
    #And user selects personal Username from Extension
    #And user selects personal Phonenumber from Extension
    #And user selects personal Address from Extension
    #And user selects card details
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website
    Then user verifies the auto fill details for personal Phonenumber with format are filled as expected for the Website
    #And user clicks Continue to Shipping button in fivemarys website
    #Then user accepts the popup
    #Then user accepts the popup
    #And user clicks Continue to Payment button in fivemarys website
    #Then user accepts the popup
    #Then user accepts the popup
    #When user enables the Extension
    #And user selects card details
    #Then user clicks Fill button from Extension
    And user clicks Paynow button in Fivemarys website
    Then user accepts the popup
    Then user accepts the popup
    And user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Checkout from interaction tab
    And user clicks "<purchase>" button by only Staictext in the Website
    And user verifies the recent record under purchase tab

    Examples: 
      | url                                         | business       | purchase  |
      | https://fivemarysmeats.com/collections/beef | Fivemarysmeats | purchases |
      
  #											*********************************************************************
  #   									************************* REGRESSION SUITES *************************
  #											*********************************************************************
  
  @all @FiveMary @regression_suite
  Scenario Outline: 12I_FI_TC01- To validate Checkout functionality
    When user completes onboarding flow with card data
    When user launches the website "<url>"
    And user clicks the first product to checkout
    Then user clicks Add to cart button in fivemarys website
    And user clicks checkout option in fivemarys website
    When user enables the Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website
    Then user verifies the auto fill details for personal Phonenumber with format are filled as expected for the Website
    And user clicks Paynow button in Fivemarys website
    Then user accepts the popup
    Then user accepts the popup
    And user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user clicks "<purchase>" button by only Staictext in the Website
    And user verifies the recent record under purchase tab

    Examples: 
      | url                                         | business       | purchase  |
      | https://fivemarysmeats.com/collections/beef | Fivemarysmeats | purchases |

  @all @regression_suite
  Scenario Outline: 12I_FI_TC02- To validate the Login,Register and forget password functionality
    When user completes onboarding flow
    When user launches the website "<registerurl>"
    When user enables the Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    When user launches the website "<loginurl>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    When user launches the website "<loginurl>"
    Then user clicks Forget Password  button in the fivemarys website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user clicks "<submit>" button by only name in the Website
    Then user accepts the popup
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Others from interaction tab

    Examples: 
      | loginurl                                 | submit | business       | registerurl                                 |
      | https://fivemarysmeats.com/account/login | Submit | Fivemarysmeats | https://fivemarysmeats.com/account/register |
