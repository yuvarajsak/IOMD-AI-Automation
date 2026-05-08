Feature: I2i_Validates IOMD Pay feature for Shopify

  @iomd_Pay @all @releaseitem1
  Scenario Outline: TC_01 User Pay using IOMD_Pay option from cart page and validate in Node
    When user completes onboarding flow with card data
    When user launches the website "<iomdpayurl>"
    And user clicks "<product>" button by name with "<pindex>" in the Website
    And user clicks Node button for payment in Shopify site
    When user validates data inside IOMD Pay Extension
    And user clicks "<submit>" button by only name in the Website
    And user verifies auto-filled data in Payment page
    And user clicks "<paynow>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user clicks "<purchase>" button by only Staictext in the Website
    Then user verifies the recent record under purchase tab

    Examples: 
      | iomdpayurl                              | business          | submit | purchase  | reviewOrder | paynow  | shippingBtn | product   | pindex | sindex |
      | https://mirrorcurative.myshopify.com/ | Curativelifestyle | Submit | purchases | Next        | Pay now | Economy     | Cakebread |      1 |      2 |


#Commented code should be taken out, if the mirror curative is in test mode.
  @iomd_Pay @all @releaseitem
  Scenario Outline: TC_02 User Validates Deeplink with Node installed and without onboarding flow along with Buy again
    When user skips onboarding flow
    When user launches the website "<iomdpayurl>"
    Then user enters the password and clicks on the enter button to proceed further
    #And user clicks "<continue>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    And user clicks "<product>" button by name with "<pindex>" in the Website
    And user clicks "<Buynow>" button by only name in the Website
    And user fills data in checkout page for NodenextGen
    And user verifies deeplink content for testfairy and clicks on it
    When user contiunes onboarding flow from deeplink
    Then user clicks on the home tab
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    #And user verifies Checkout from interaction tab
    And user clicks "<purchase>" button by only Staictext in the Website
    And user verifies the recent record under purchase tab
    #And user clicks "<buyagain>" button by name with "<pindex>" in the Website
    #And user clicks Node button for payment in Shopify site from Cart page
    #And user clicks "<submit>" button by only name in the Website
    #Then user fills card data in checkout page for BuyAgain
    #And user clicks "<paynow>" button by only name in the Website
    #Then user accepts the popup
    #Then user accepts the popup
    #Then user verifies deeplink content and clicks on it
    #When user switches back to the IOMD application
    #And user verifies and clicks on the business tab
    #And user clicks "<business>" business by only name in the IOMD Transactions
    #And user verifies Checkout from interaction tab
    #And user clicks "<purchase>" button by only Staictext in the Website
    #And user verifies the recent record under purchase tab

    Examples: 
      | iomdpayurl                              | open | Buynow     | continue | business          | submit | purchase  | reviewOrder | placeOrder  | shippingBtn | product   | pindex | sindex | buyagain  |
      | https://mirrorcurative.myshopify.com | Open | Buy it now | Continue | Curativelifestyle | Submit | purchases | Next        | Place Order | Economy     | Cakebread |      1 |      2 | Buy again |

 