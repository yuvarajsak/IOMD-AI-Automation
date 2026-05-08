Feature: To Validate the autofill option and interaction are getting captured correctly in the fivemarys application

  # Phone number in mylapore is not displayed as expected via extension, hence commenting and entering manually
  @all @dyn_Exe @Mylapore
  Scenario Outline: TC_01- To validate Checkout functionality in the MylaporeExpress application as a Guest user
    When user completes onboarding flow with card data
    And user launches the website "<url>"
    When user enables the Extension
    And user selects personal Address from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website
    Then user scroll down to Zip code field and enters value
    When user selects day and selects the first custom option
    Then user clicks Add To Cart button in MylaporeExpress
    Then user clicks "<ContinueBtn>" button by only name in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    And user selects personal Address from Extension
    #And user selects personal Phonenumber from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website
    #Then user verifies the auto fill details for personal Phonenumber with format are filled as expected for the Website
    Then user verifies the auto fill details for Country are filled as expected for the Website
    When user enters Phonenumber for Mylapore Express
    Then user clicks "<ContinuetoPayment>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    When user enables the Extension
    And user selects card details
    Then user clicks Fill button from Extension
    And user verifies the auto fill details for card number are filled as expected for the Website
    And user clicks "<Pay>" button by name with "<index>" in the Website
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Checkout from interaction tab

    #Purchase interaction is not captured, hence commenting it
    #And user clicks "<purchase>" button by only Staictext in the Website
    #And user verifies the recent record under purchase tab
    Examples: 
      | url                         | ContinueBtn | ContinuetoPayment   | Pay | index | business        |
      | https://mylaporeexpress.com | Continue    | Continue to Payment | Pay |     5 | Mylaporeexpress |

  @all @dyn_Exe
  Scenario Outline: TC_02- To validate the login functionality in the MylaporeExpress application
    When user completes onboarding flow
    When user launches the website "<url>"
    And user clicks on the MyAccount icon in the MylaporeExpress website
    And user enters Phonenumber for Login In Mylapore Express
    Then user clicks "<Login>" button by only name in the Website
     Then user accepts the popup
    Then user accepts the popup
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Login-Guest from interaction tab

    #When user enables the Extension
    #And user selects personal Phonenumber from Extension
    #Then user clicks Fill button from Extension
    #Then user verifies the auto fill details for personal Phonenumber with format are filled as expected for the Website
    Examples: 
      | url                         | Login | business        |
      | https://mylaporeexpress.com | LOGIN | Mylaporeexpress |

  @all @dyn_Exe
  Scenario Outline: TC_02- To validate the SignUp functionality in the MylaporeExpress application
    When user completes onboarding flow
    When user launches the website "<url>"
    Then user clicks on the MyAccount icon in the MylaporeExpress website
    Then user clicks Signup button in the MylaporeExpress website
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website

    Examples: 
      | url                         |
      | https://mylaporeexpress.com |
