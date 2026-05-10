Feature: Codegen Step14 Buy Again

  @codegen @step14 @buyagain @ios @positive @smoke
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

  @codegen @step14 @buyagain @ios @positive @coverage
  Scenario: TC_02 - Known available Shopify variant opens checkout contact form
    Given Codegen Buy Again opens Shopify storefront "https://iomdnewgen21.myshopify.com/"
    When Codegen Buy Again unlocks the Shopify store
    And Codegen Buy Again opens known available variant checkout
    Then Codegen Buy Again checkout contact form is visible

  @codegen @step14 @buyagain @ios @positive @coverage
  Scenario: TC_03 - Existing node extension permission can be reused
    Given Codegen Buy Again opens Shopify storefront "https://iomdnewgen21.myshopify.com/"
    When Codegen Buy Again unlocks the Shopify store
    And Codegen Buy Again enables the node Safari extension
    And Codegen Buy Again enables the node Safari extension
    Then Codegen Buy Again node extension remains ready for Shopify

  @codegen @step14 @buyagain @ios @negative @coverage
  Scenario: TC_04 - Invalid Shopify store password keeps the store locked
    Given Codegen Buy Again opens Shopify storefront "https://iomdnewgen21.myshopify.com/"
    When Codegen Buy Again enters invalid Shopify store password
    Then Codegen Buy Again Shopify store remains locked

  @codegen @step14 @buyagain @ios @negative @coverage
  Scenario: TC_05 - Empty Shopify cart does not expose checkout contact form
    Given Codegen Buy Again opens Shopify storefront "https://iomdnewgen21.myshopify.com/"
    When Codegen Buy Again unlocks the Shopify store
    And Codegen Buy Again opens checkout with an empty cart
    Then Codegen Buy Again checkout contact form is not visible

  @codegen @step14 @buyagain @ios @negative @coverage
  Scenario: TC_06 - Invalid checkout email shows validation
    Given Codegen Buy Again opens Shopify storefront "https://iomdnewgen21.myshopify.com/"
    When Codegen Buy Again unlocks the Shopify store
    And Codegen Buy Again opens known available variant checkout
    And Codegen Buy Again submits invalid checkout email
    Then Codegen Buy Again invalid email validation is shown

  @codegen @step14 @buyagain @ios @negative @coverage
  Scenario: TC_07 - Missing checkout address shows required-field validation
    Given Codegen Buy Again opens Shopify storefront "https://iomdnewgen21.myshopify.com/"
    When Codegen Buy Again unlocks the Shopify store
    And Codegen Buy Again opens known available variant checkout
    And Codegen Buy Again submits checkout without required address
    Then Codegen Buy Again required address validation is shown

  @codegen @step14 @buyagain @ios @negative @coverage
  Scenario: TC_08 - Missing payment security code shows card validation
    Given Codegen Buy Again opens Shopify storefront "https://iomdnewgen21.myshopify.com/"
    When Codegen Buy Again unlocks the Shopify store
    And Codegen Buy Again opens known available variant checkout
    And Codegen Buy Again completes checkout contact details
    And Codegen Buy Again submits payment without security code
    Then Codegen Buy Again payment security code validation is shown

  @codegen @step14 @buyagain @ios @edge @coverage
  Scenario: TC_09 - Node success overlay can be dismissed before business selection
    Given Codegen Buy Again starts from completed onboarding
    Then Codegen Buy Again node overlay is dismissed and Iomdnewgen21 can be selected

  @codegen @step14 @buyagain @ios @edge @coverage
  Scenario: TC_10 - Purchased-product lookup supports Shopify title fallback
    Given Codegen Buy Again starts from completed onboarding
    Then Codegen Buy Again can use fallback product selectors in the node app
