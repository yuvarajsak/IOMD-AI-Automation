Feature: I2i_Validates IOMD Pay feature for Woocommerce

  @iomd_Pay @all
  Scenario Outline: TC_01 User Pay using IOMD_Pay option from cart page and validate in Backend
    When user completes onboarding flow with card data
    When user launches the website "<iomdpayurl>"
    And user clicks "<clothing>" button by name in the Website
    And user clicks "<addCartBtn>" button by name with "<index>" in the Website
    And user clicks Node button for payment in Woocommerce site
    When user validates data inside IOMD Pay Extension
    And user clicks "<reviewOrder>" button by only name in the Website
    And user clicks "<shippingBtn>" button by name with "<sindex>" in the Website
    And user verifies the amount with shipping cost for Woocommerce
    And user clicks "<placeOrder>" button by only name in the Website
    When user switches back to the IOMD application
    And user verifies and clicks on the message tab
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Checkout from interaction tab
    And user clicks "<purchase>" button by only Staictext in the Website
    Then user verifies the recent record under purchase tab

    Examples: 
      | iomdpayurl                    | business    | purchase  | reviewOrder  | placeOrder  | shippingBtn | clothing          | sindex | viewCart           | myCartBtn | addCartBtn | index |
      | http://iomdshopwoo.iomd.info/ | Iomdshopwoo | purchases | Review Order | Place Order | Flat Rate   | Clothing Clothing |      1 | View and Edit Cart | My Cart   | Add        |     1 |

  @iomd_Pay @all
  Scenario Outline: TC_02 User Pay using IOMD_Pay option from cart page and validate in Node along with purchase again option with discount
    When user completes onboarding flow with card data
    When user launches the website "<iomdpayurl>"
    And user clicks "<clothing>" button by name in the Website
    And user clicks "<addCartBtn>" button by name with "<index>" in the Website
    And user clicks "<continueShopping>" button by only Staictext in the Website
     And user clicks "<addCartBtn>" button by name with "<sindex>" in the Website
    And user clicks Node button for payment in Woocommerce site
    When user validates data inside IOMD Pay Extension
    And user clicks "<reviewOrder>" button by only name in the Website
    And user clicks "<shippingBtn>" button by name with "<index>" in the Website
    And user verifies the amount with shipping cost for Woocommerce
    And user clicks "<placeOrder>" button by only name in the Website
    When user switches back to the IOMD application
    And user verifies and clicks on the message tab
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Checkout from interaction tab
    And user clicks "<purchase>" button by only Staictext in the Website
    And user verifies the recent record under purchase tab
    And user verifies and clicks on the message tab
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user clicks "<purchase>" button by only Staictext in the Website
    And user verifies the recent record under purchase tab
    And user verifies the offer "<offerselected>" for buy again option
    And user clicks "<buyagain>" button by name with "<index>" in the Website
    And user clicks Node button for payment in Woocommerce site
    When user validates data inside IOMD Pay Extension
    And user clicks "<reviewOrder>" button by only name in the Website
    And user clicks "<shippingBtn>" button by name with "<index>" in the Website
    Then user verifies the amount with shipping cost for Woocommerce with discount

    Examples: 
      | iomdpayurl                    | continueShopping  | business    | offerselected | buyagain  | purchase  | reviewOrder  | placeOrder  | shippingBtn | clothing          | sindex | viewCart           | myCartBtn | addCartBtn | index |
      | http://iomdshopwoo.iomd.info/ | Continue shopping | Iomdshopwoo |             5 | buy again | purchases | Review Order | Place Order | Flat Rate   | Clothing Clothing |      2 | View and Edit Cart | My Cart   | Add        |     1 |
