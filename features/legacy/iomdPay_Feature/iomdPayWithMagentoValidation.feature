Feature: I2i_Validates IOMD Pay feature and cheecks the order placed data in Magento

  @iomd_Pay @all
  Scenario Outline: TC_01 User Pay using IOMD_Pay option from cart page and validate in Backend
    #When user completes onboarding flow
    #When user navigates to the settings application and enables the extension
    #Then user navigates to the safari application
    #When user launches the website "<url>"
    #When user launches the website "<producturl>"
    #When user selects the first product in coravin for checking out
    #And user clicks "<adddToCartBtn>" button by only name in the Website
    #When user clicks on the checkout Icon and verifies the product
    #Then user clicks on the continue to checkout button in checkout page
    #And user clicks "<guestcheckout>" button by only name in the Website
    #When user enables the Extension
    #And user selects tokenised Email from Extension
    #And user selects personal Username from Extension
    #And user selects personal Address from Extension
    #And user selects personal Phonenumber from Extension
    #Then user clicks Fill button from Extension
    #Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    #Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    #Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    #Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website
    #Then user verifies the auto fill details for personal Phonenumber are filled as expected for the Website
    #When user clicks on the get shipping option "<GetShippingOption>"
    #When user clicks on the continue to payment button "<continueToPayment>"
    #When user Fills the card details in Coravin website
    #And user clicks "<reviewOrder>" button by name with "<rindex>" in the Website
    #Then user accepts the popup
     When user completes onboarding flow with card data
    When user launches the website "<iomdpayurl>"
    And user clicks "<showdetails>" button by only name in the Website
    And user clicks "<visitthiswebsite>" button by only name in the Website
    And user clicks "<VisitWebsite>" button by only name in the Website
    And user clicks "<addCartBtn>" button by name with "<index>" in the Website
    And user clicks "<myCartBtn>" button by name in the Website
    And user clicks "<viewCart>" button by only Staictext in the Website
    And user clicks "<payWithIOMD>" button by name in the Website
   	When user validates data inside IOMD Pay Extension
    And user clicks "<reviewOrder>" button by only name in the Website
    And user clicks "<shippingBtn>" button by name with "<sindex>" in the Website
    And user verifies the amount with shipping cost
    And user clicks "<placeOrder>" button by only name in the Website
    And user verifies the placed order is displayed in IOMDPay Admin

    Examples: 
      | url                     | iomdpayurl                  | placeOrder  | shippingBtn | rindex | sindex | reviewOrder  | producturl                                                | payWithIOMD   | viewCart           | myCartBtn | addCartBtn  | index | VisitWebsite  | visitthiswebsite   | guestcheckout     | adddToCartBtn | GetShippingOption | continueToPayment | showdetails  |
      | https://www.coravin.com | https://iomdshop.iomd.info/ | Place Order | Flat Rate   |      3 |      1 | Review Order | https://www.coravin.com/shop/category/coravin-accessories | Pay with IOMD | View and Edit Cart | My Cart   | Add to Cart |     5 | Visit Website | visit this website | Continue as Guest | Add to cart   | GetShippingOption | paymentmode       | Show Details |


  @all
  Scenario Outline: TC_02 User Pay using IOMD_Pay option from cart icon and validate in Backend
    #When user completes onboarding flow
    #When user navigates to the settings application and enables the extension
    #Then user navigates to the safari application
    #When user launches the website "<url>"
    #When user launches the website "<producturl>"
    #When user selects the first product in coravin for checking out
    #And user clicks "<adddToCartBtn>" button by only name in the Website
    #When user clicks on the checkout Icon and verifies the product
    #Then user clicks on the continue to checkout button in checkout page
    #And user clicks "<guestcheckout>" button by only name in the Website
    #When user enables the Extension
    #And user selects tokenised Email from Extension
    #And user selects personal Username from Extension
    #And user selects personal Address from Extension
    #And user selects personal Phonenumber from Extension
    #Then user clicks Fill button from Extension
    #Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    #Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    #Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    #Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website
    #Then user verifies the auto fill details for personal Phonenumber are filled as expected for the Website
    #When user clicks on the get shipping option "<GetShippingOption>"
    #When user clicks on the continue to payment button "<continueToPayment>"
    #When user Fills the card details in Coravin website
    #Then user accepts the popup
     When user completes onboarding flow with card data
    When user launches the website "<iomdpayurl>"
    And user clicks "<showdetails>" button by only name in the Website
    And user clicks "<visitthiswebsite>" button by only name in the Website
    And user clicks "<VisitWebsite>" button by only name in the Website
    And user clicks "<addCartBtn>" button by name with "<index>" in the Website
    And user clicks "<myCartBtn>" button by name in the Website
    And user clicks "<payWithIOMD>" button by name in the Website
    When user validates data inside IOMD Pay Extension
    And user clicks "<reviewOrder>" button by only name in the Website
    And user clicks "<shippingBtn>" button by name with "<sindex>" in the Website
    And user verifies the amount with shipping cost
    And user clicks "<placeOrder>" button by name in the Website
    And user verifies the placed order is displayed in IOMDPay Admin

    Examples: 
      | url                     | iomdpayurl                  | placeOrder  | shippingBtn | sindex | reviewOrder  | producturl                                                | payWithIOMD   | viewCart           | myCartBtn | addCartBtn  | index | VisitWebsite  | visitthiswebsite   | guestcheckout     | adddToCartBtn | GetShippingOption | continueToPayment | showdetails  |
      | https://www.coravin.com | https://iomdshop.iomd.info/ | Place Order | Flat Rate   |      1 | Review Order | https://www.coravin.com/shop/category/coravin-accessories | Pay with IOMD | View and Edit Cart | My Cart   | Add to Cart |     5 | Visit Website | visit this website | Continue as Guest | Add to cart   | GetShippingOption | paymentmode       | Show Details |


  @all
  Scenario Outline: TC_03 User tries to add invalid addresss and Pay using IOMD_Pay option
   When user completes onboarding flow with invalid address
    Then user clicks on the save tokenized email button
    Then user clicks on the check your message button
    Then user clicks on the show me the magic button
    When user fills tokenised First and Last name
    When user fills tokenised personal information with invalid address
    Then user clicks on the save and show me the magic button
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the website "<url>"
    When user launches the website "<producturl>"
    When user selects the first product in coravin for checking out
    And user clicks "<adddToCartBtn>" button by only name in the Website
    When user clicks on the checkout Icon and verifies the product
    Then user clicks on the continue to checkout button in checkout page
    And user clicks "<guestcheckout>" button by only name in the Website
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
    When user clicks on the get shipping option "<GetShippingOption>"
    When user clicks on the continue to payment button "<continueToPayment>"
    When user Fills the card details in Coravin website
    Then user accepts the popup
    When user launches the website "<iomdpayurl>"
    And user clicks "<showdetails>" button by only name in the Website
    And user clicks "<visitthiswebsite>" button by only name in the Website
    And user clicks "<VisitWebsite>" button by only name in the Website
    And user clicks "<addCartBtn>" button by name with "<index>" in the Website
    And user clicks "<myCartBtn>" button by name in the Website
    And user clicks "<payWithIOMD>" button by name in the Website
    When user select invalid address from list
    And user clicks "<reviewOrder>" button by only name in the Website
    And user clicks "<shippingBtn>" button by name with "<sindex>" in the Website
    And user clicks "<placeOrder>" button by name in the Website

    Examples: 
      | url                     | iomdpayurl                  | placeOrder  | shippingBtn | sindex | reviewOrder  | producturl                                                | payWithIOMD   | viewCart           | myCartBtn | addCartBtn  | index | VisitWebsite  | visitthiswebsite   | guestcheckout     | adddToCartBtn | GetShippingOption | continueToPayment | showdetails  |
      | https://www.coravin.com | https://iomdshop.iomd.info/ | Place Order | Flat Rate   |      1 | Review Order | https://www.coravin.com/shop/category/coravin-accessories | Pay with IOMD | View and Edit Cart | My Cart   | Add to Cart |     5 | Visit Website | visit this website | Continue as Guest | Add to cart   | GetShippingOption | paymentmode       | Show Details |
      
   