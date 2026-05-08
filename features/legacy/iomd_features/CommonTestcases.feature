Feature: To Validate the autofill option and interaction are getting captured correctly in the fivemarys application

  #old onboarding flow
  @all @Exe
  Scenario Outline: TC_01- To validate the tokenised email flow of IOMD on launching application
    When user validates the homescreen data of IOMD
    When user enters tokenised Email
    Then user clicks on the save tokenized email button
    When user validates the data after logging in with tokenized email of IOMD
    Then user clicks on the check your message button
    When user validates the Email data from IOMD support
    Then user clicks on the show me the magic button
    When user verifies data in Tokenised and Personal info page of IOMD
    When user fills tokenised First and Last name
    When user fills tokenised personal information
    Then user clicks on the save and show me the magic button
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    And user switches back to the IOMD application
    Then user validates personal information in IOMD Homepage
    Then user validates tokenised information in IOMD Homepage

    Examples: 
      | guestcheckout |
      | guestcheckout |

  @all @testa
  Scenario Outline: TC_03- To validate the onboarding flow and business UI of IOMD
    #onboading for websites
    When user completes onboarding flow
    #onboarding with validation
    When user completes onboarding flow with validation
    And user fills tokenised personal information
    Then user validates Enable extension page
    When user switches back to the IOMD application
    And user clicks on the show me the magic button
    Then user validates ShowMeMagic Page
    When user switches back to the IOMD application
    Then user validates personal information in IOMD Homepage
    And user validates tokenised information in IOMD Homepage
    When user navigates to the settings application and enables the extension
    And user navigates to the safari application
    And user launches the website "<url>"
    And user launches the website "<producturl>"
    And user selects the first product in coravin for checking out
    And user clicks "<adddToCartBtn>" button by only name in the Website
    And user clicks on the checkout Icon and verifies the product
    And user clicks on the continue to checkout button in checkout page
    And user clicks "<guestcheckout>" button by only name in the Website
    And user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    And user selects personal Address from Extension
    And user selects personal Phonenumber from Extension
    Then user clicks Fill button from Extension
    And user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user verifies the auto fill details for personal FirstName are filled as expected for the Website
    And user verifies the auto fill details for personal LastName are filled as expected for the Website
    And user verifies the auto fill details for personal Zipcode are filled as expected for the Website
    And user verifies the auto fill details for personal Phonenumber are filled as expected for the Website
    And user verifies the auto fill details for Country are filled as expected for the Website
    When user clicks on the get shipping option "<GetShippingOption>"
    And user clicks on the continue to payment button "<continueToPayment>"
    And user Fills the card details in Coravin website
    And user clicks "<ReviewOrderbtn>" button by name with "<index>" in the Website
    And user accepts the popup
    And user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" button by only Staictext in the Website
    Then user verifies the business detail page for coravin
    Then user verifies and clicks on the Interactions tab
    And user verifies Checkout from interaction tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user clicks IOMD back button
    And user verifies and clicks on Payment from interaction tab
    And user clicks "<business>" business by only name in the IOMD Transactions

    Examples: 
      | url                     | producturl                                                | guestcheckout     | PlaceOrderbtn | ReviewOrderbtn | index | adddToCartBtn | GetShippingOption | continueToPayment | business |
      | https://www.coravin.com | https://www.coravin.com/shop/category/coravin-accessories | Continue as Guest | Place Order   | Review Order   |     3 | Add to cart   | GetShippingOption | paymentmode       | Coravin  |

  @NotForExecution
  Scenario Outline: TC_02- Navigate to URL with tokenised email flow
    ### Dynamic profile ###
    When user completes onboarding flow
    When user completes onboarding flow with card data
    When user completes onboarding flow with card data and Validation
    #When user enters tokenised Email
    #Then user clicks on the save tokenized email button
    #Then user clicks on the check your message button
    #Then user clicks on the show me the magic button
    #When user fills tokenised First and Last name
    #When user fills tokenised personal information
    #Then user clicks on the save and show me the magic button
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the website "<url>"
    ### Filling data from Extension ###
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects tokenised Username from Extension
    And user selects tokenised Address from Extension
    And user selects tokenised Phonenumber from Extension
    And user selects personal Email from Extension
    And user selects personal Username from Extension
    And user selects personal Address from Extension
    And user selects personal Phonenumber from Extension
    And user selects card details
    Then user clicks Fill button from Extension
    ### Validating filled data from Extension ###
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for tokenised Username are filled as expected for the Website
    Then user verifies the auto fill details for tokenised FirstName are filled as expected for the Website
    Then user verifies the auto fill details for tokenised LastName are filled as expected for the Website
    Then user verifies the auto fill details for tokenised Zipcode are filled as expected for the Website
    Then user verifies the auto fill details for tokenised Phonenumber are filled as expected for the Website
    #Then user verifies the auto fill details for tokenised Phonenumber with format are filled as expected for the Website
    Then user verifies the auto fill details for personal Email are filled as expected for the Website
    Then user verifies the auto fill details for personal Username are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website
    Then user verifies the auto fill details for personal Address1 are filled as expected for the website
    Then user verifies the auto fill details for personal Phonenumber are filled as expected for the Website
    #Then user verifies the auto fill details for personal Phonenumber with format are filled as expected for the Website
    Then user verifies the auto fill details for Country are filled as expected for the Website
    Then user verifies the auto fill details for City are filled as expected for the Website
    Then user verifies the auto fill details for State are filled as expected for the Website
    And user verifies the auto fill details for card number are filled as expected for the Website
    ### Filling random email to filled extension value textbox ###
    And user enters random email in Email Id textbox
    ### Accessing common elements in the page ###
    And user clicks "<button>" button by name in the Website
    And user clicks "<link>" link by value in the Website
    And user clicks "<button>" button by only name in the Website
    And user clicks "<button>" button by only Staictext in the Website
    And user clicks "<button>" button by StaticText with "<index>" in the Website
    And user clicks "<button>" button by name with "<index>" in the Website
    When user clicks a button "<btnName>"by text name in the Website
    ### verifying popup from iomd ###
    Then user accepts the popup
    And user clicks "<notnow>" button by only name in the Website
    And user accepts the save credential popup for autologin in IOMD Profile
    Then user accepts the save Signup credential popup for autologin in IOMD Profile
    When user handles Save Password Popup from IOMD Application
    Then user accepts the update popup for saving cards in IOMD Profile
    Then user accepts the update popup for existing cards in IOMD Profile
    Then user verifies the card details is saved in IOMD Application
    ### verifying business transactions for Payment###
    And user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user clicks "<purchase>" button by only Staictext in the Website
    And user verifies the recent record under purchase tab
    ### verifying business transactions for login,others,register and checkout###
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Login from interaction tab
    And user verifies Others from interaction tab
    And user verifies Register from interaction tab
    And user verifies Checkout from interaction tab
    And user verifies PwdChange from interaction tab
    ### Interaction Tab###
    Then user verifies and clicks on the Interactions tab
    ### Messages Tab###
    Then user verifies and clicks on the message tab
    ### Profile Tab###
    Then user clicks on the profile tab
     ### Settings Tab###
    Then user clicks on the settings tab
     ### Home Tab###
    Then user clicks on the home tab
    #And user verifies and clicks on Payment from interaction tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user clicks IOMD back button
    And user switches to IOMD Admin application and delete the created tokenised data
    ### To open insecured site with advanced option
    And user clicks "<showdetails>" button by only name in the Website
    And user clicks "<visitthiswebsite>" button by only name in the Website
    And user clicks "<VisitWebsite>" button by only name in the Website
    #IOMDPAY Node payment -WOO
    And user clicks Node button for payment in Woocommerce site
    And user clicks Node button for payment in Shopify site

    Examples: 
      | business    | purchase  | VisitWebsite  | visitthiswebsite   | showdetails  | notnow  |
      | websitename | purchases | Visit Website | visit this website | Show Details | Not Now |
