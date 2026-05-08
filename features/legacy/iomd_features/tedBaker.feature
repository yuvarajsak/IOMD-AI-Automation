Feature: Validates the auofill operation in the tedbaker website after enabling the extension.

  @tedbakerNewsLetterSignUp @all @updated @sample1
  Scenario Outline: 12I_36_TC01- Validates the display of the news letter sign up in the tedbaker extension
    When user completes onboarding flow
    When user launches the website "<url>"
    Then user accepts the accept all cookies button
    #When user clicks on the go to site button
    When user scroll to newsletter signup form
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user clicks "<women>" button by only name in the Website
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Others from interaction tab

    Examples: 
      | url                         | business | women |
      | https://www.tedbaker.com/us | Tedbaker | Women |

  @endToendScenario @all @updated
  Scenario Outline: 12I_36_TC02- Validates the display of the Product Checkout in the tedbaker extension
    When user completes onboarding flow with card data
    When user launches the website "<url>"
    Then user accepts the accept all cookies button
    When user clicks on the go to site button
    When user launches the website "<producturl>"
    When user selects the first product in tedbaker for checking out
    And user clicks "<addToBag>" button by only name in the Website
    Then user accepts the accept all cookies button
    Then user accepts the accept all cookies button
    When user launches the website "<carturl>"
    Then user accepts the accept all cookies button
    Then user accepts the accept all cookies button
    And user clicks "<checkoutbtn>" button by only name in the Website
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user clicks "<connectbtn>" button by only name in the Website
    When user enables the Extension
    And user selects personal Username from Extension
    And user selects personal Phonenumber from Extension
    And user selects personal Address from Extension
    Then user clicks Fill button from Extension
    When user selects address from dropdown in Tedbaker
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user verifies the auto fill details for personal Phonenumber are filled as expected for the Website
    And user clicks "<stdDeliverybtn>" button by only Staictext in the Website
    And user clicks "<continuePayment>" button by only name in the Website
    Then user accepts the popup
    #When user Fills the card details in TedBaker website
    When user enables the Extension
    And user selects card details
    Then user clicks Fill button from Extension
    And user clicks "<completeorder>" button by only name in the Website
    Then user accepts the popup
    #Then user accepts the update popup for existing cards in IOMD Profile
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Checkout from interaction tab
    And user clicks "<purchase>" button by only Staictext in the Website
    And user verifies the recent record under purchase tab

    Examples: 
      | url                         | purchase  | index | checkouturl                            | producturl                                   | business | completeorder       | continuePayment     | usethisbtn                      | stdDeliverybtn           | connectbtn        | addToBag   | carturl                                 | checkoutbtn          |
      | https://www.tedbaker.com/us | purchases |     2 | https://checkout.tedbaker.com/checkout | https://www.tedbaker.com/us/c/gifts/sale/856 | Tedbaker | Complete Your Order | Continue to Payment | Use this as my billing address. | Standard ground delivery | Continue Securely | Add to Bag | https://www.tedbaker.com/us/shoppingbag | Continue to Checkout |
