Feature: I2i_Validates IOMD Pay feature for Shopify - NodeNextGen

  @iomd_Pay @all @releaseitem#1
  Scenario Outline: TC_01 User Pay using IOMD_Pay option from cart page and validate in Node
    When user completes onboarding flow with card data
    When user launches the website "<iomdpayurl>"
    Then user enters the password and clicks on the enter button to proceed further
    #And user clicks "<continue>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    And user clicks "<product>" button by name with "<pindex>" in the Website
    And user clicks Node button for payment in Shopify site    
    #And user clicks Fill from NodeConnect Button
    #When user validates data inside IOMD Pay Extension
    And user clicks "<submit>" button by only name in the Website
    And user verifies auto-filled data in Payment page
    And user clicks "<paynow>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    Then user verifies deeplink content and clicks on it
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Checkout from interaction tab
 	 And user clicks on the purchase tab
    And user verifies the recent record under purchase tab

    Examples: 
      | iomdpayurl                             | continue | business         | submit | purchase  | reviewOrder | paynow  | shippingBtn | product                      | pindex | sindex |
      | https://nodenextgenstore.myshopify.com | Continue | Nodenextgenstore | Submit | purchases | Next        | Pay now | Economy     | The Multi-location Snowboard |      1 |      2 |

  @iomd_Pay @all @releaseitem#2
  Scenario Outline: TC_03 User Validates Deeplink with Node installed and without onboarding flow along with Buy again
    When user skips onboarding flow
    When user launches the website "<iomdpayurl>"
    Then user enters the password and clicks on the enter button to proceed further
    #And user clicks "<continue>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    And user clicks "<product>" button by name with "<pindex>" in the Website
    And user clicks "<addCartBtn>" button by only name in the Website
    And user clicks "<checkout>" button by only name in the Website
    #And user clicks "<Buynow>" button by only name in the Website
    And user fills data in checkout page for NodenextGen
    And user verifies deeplink content and clicks on it
    When user contiunes onboarding flow from deeplink
    Then user clicks on the home tab
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Checkout from interaction tab
   And user clicks on the purchase tab
    And user verifies the recent record under purchase tab
    And user clicks "<buyagain>" button by name with "<pindex>" in the Website
    And user clicks Node button for payment in Shopify site from Cart page
    And user clicks "<submit>" button by only name in the Website
    Then user fills card data in checkout page for BuyAgain
    And user clicks "<paynow>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    Then user verifies deeplink content and clicks on it
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Checkout from interaction tab
    And user clicks on the purchase tab
    And user verifies the recent record under purchase tab

    Examples: 
      | iomdpayurl                             | addCartBtn  | checkout  | open | Buynow     | continue | business         | submit | purchase  | reviewOrder | placeOrder  | shippingBtn | product                      | pindex | sindex | buyagain  |
      | https://nodenextgenstore.myshopify.com | Add to cart | Check out | Open | Buy it now | Continue | Nodenextgenstore | Submit | purchases | Next        | Place Order | Economy     | The Multi-location Snowboard |      1 |      2 | Buy again |

  #unable to test with test fairy, we can't download with simulator
  @iomd_Pay @all
  Scenario Outline: TC_03 User Validates Deeplink with TestFairy
    When user deletes node application
    When user launches the website "<iomdpayurl>"
    Then user enters the password and clicks on the enter button to proceed further
    #And user clicks "<continue>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    And user clicks "<product>" button by name with "<pindex>" in the Website
    And user clicks "<addCartBtn>" button by only name in the Website
    And user clicks "<checkout>" button by only name in the Website
    And user fills data in checkout page for NodenextGen
    Then user verifies deeplink content for testfairy and clicks on it
    #When user download app from testfairy
    And user contiunes onboarding flow from deeplink
    Then user clicks on the home tab
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Checkout from interaction tab
 And user clicks on the purchase tab
    And user verifies the recent record under purchase tab

    Examples: 
      | iomdpayurl                             | open | addCartBtn  | checkout  | Buynow     | continue | business         | submit | purchase  | reviewOrder | placeOrder  | shippingBtn | product                      | pindex | sindex |
      | https://nodenextgenstore.myshopify.com | Open | Add to cart | Check out | Buy it now | Continue | Nodenextgenstore | Submit | purchases | Next        | Place Order | Economy     | The Multi-location Snowboard |      1 |      2 |

  @iomd_Pay @all
  Scenario Outline: TC_02 User Pay using IOMD_Pay option from cart page and validate in Node along with purchase again option with discount
    When user completes onboarding flow with card data
    When user launches the website "<iomdpayurl>"
    Then user enters the password and clicks on the enter button to proceed further
    #And user clicks "<continue>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    And user clicks "<product>" button by name with "<pindex>" in the Website
    And user clicks "<increase>" button by name in the Website
    And user clicks "<addCartBtn>" button by only name in the Website
    When user launches the website "<iomdpayurl>"
    And user clicks "<product2>" button by name with "<sindex>" in the Website
    And user clicks "<increase>" button by name in the Website
    And user clicks "<addCartBtn>" button by only name in the Website
    And user clicks "<viewCart>" button by name with "<pindex>" in the Website
    And user clicks Node button for payment in Shopify site from Cart page
    When user validates data inside IOMD Pay Extension
    #And user verifies the amount with shipping cost for Shopify
    And user clicks "<paynow>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
 And user clicks on the purchase tab
    And user verifies the recent record under purchase tab
    #And user verifies the offer "<offerselected>" for buy again option
    And user clicks "<buyagain>" button by name with "<pindex>" in the Website
    And user clicks Node button for payment in Shopify site from Cart page
    When user validates data inside IOMD Pay Extension
    #And user verifies the amount with shipping cost for Shopify with discount
    And user clicks "<paynow>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Checkout from interaction tab
 And user clicks on the purchase tab
    And user verifies the recent record under purchase tab

    Examples: 
      | iomdpayurl                             | offerselected | buyagain  | increase | viewCart  | addCartBtn  | checkout  | business         | purchase  | reviewOrder | paynow  | shippingBtn | product                      | product2 | pindex | sindex |
      | https://nodenextgenstore.myshopify.com |             5 | buy again | Increase | View cart | Add to cart | Check out | Nodenextgenstore | purchases | Next        | Pay now | Economy     | The Multi-location Snowboard | Oxygen   |      1 |      2 |
