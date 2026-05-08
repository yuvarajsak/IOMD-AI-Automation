Feature: Validates the auofill operation in the curative lifestyle website after enabling the extension and verifies the details are present in the transactionView

  @CurativeNewsLetterSignUptransaction @all
  Scenario Outline: TC01- Validates the display of the news letter sign up in the curative lifestyle extension and verifies the entered details in the transaction tab
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user clicks on the enter button in the application
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Others from interaction tab

    Examples: 
      | url                                     | business          |
      | https://curativelifestyle.myshopify.com | Curativelifestyle |

  @addressFieldValuetransaction @all @cur1
  Scenario Outline: TC02- Validated and enters the address using autofill extension after that showing up in  the transaction tab
    When user completes onboarding flow with card data
    When user launches the website "<url>"
    #When user clicks on the enter using password link
    Then user enters the password "<passWord>" and clicks on the enter button to proceed further
    When user selects the product in Curative Lifestyle
    Then User clicks on the add to cart button
    When user clicks on the cart button
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    And user selects personal Address from Extension
    And user selects personal Phonenumber from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website
    Then user verifies the auto fill details for personal Phonenumber are filled as expected for the Website
    When user clicks on the continue and payment to the product button
    Then user accepts the popup
    When user enables the Extension
    And user selects card details
    Then user clicks Fill button from Extension
    #When user Fills the card details in CurativeLifestyle website
    And user clicks "<Paynow>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Checkout from interaction tab
    And user clicks "<purchase>" button by only Staictext in the Website
    And user verifies the recent record under purchase tab

    Examples: 
      | url                                     | passWord  | business          | Paynow  | purchase  |
      | https://curativelifestyle.myshopify.com | Iwantwine | Curativelifestyle | Pay now | purchases |
