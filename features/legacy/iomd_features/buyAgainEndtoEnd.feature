Feature: To Validate the buy again data is getting displayed as expected
 

  @buyagain_nodebold
  Scenario Outline: TC01_Validates the user is able to buy the product and make an buy again with it 
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enters the store password
    When user enables node extension
    Then user selects first product and proceeds to checkout
    When user enters checkout contact details and selects suggested address
    When user enters card details and closes keyboard
    Then user clicks Pay Now button
    When user clicks on track my order button from thank you page
    When user switches back to the IOMD application
    When user selects first business and clicks buy again
    #When user enters card details and closes keyboard
  
    Examples: 
      | url  | 
      | https://iomdnewgen21.myshopify.com/ |   
     
