Feature: Codegen Step14 Buy Again

  @codegen @step14 @buyagain @ios
  Scenario: TC_01 - Complete Shopify checkout and validate Buy Again from IOMD
    Given Codegen Buy Again starts from completed onboarding
    When Codegen Buy Again opens Shopify storefront "https://iomdnewgen21.myshopify.com/"
    And Codegen Buy Again unlocks the Shopify store
    And Codegen Buy Again enables the node Safari extension
    And Codegen Buy Again opens any available Shopify product
    And Codegen Buy Again adds the product to cart and starts checkout
    And Codegen Buy Again completes checkout contact details
    And Codegen Buy Again enters payment details
    And Codegen Buy Again submits the order
    And Codegen Buy Again tracks the order from the thank you page
    And Codegen Buy Again returns to the IOMD app
    Then Codegen Buy Again purchased product is shown in the node app
    And Codegen Buy Again product can be ordered again from IOMD
