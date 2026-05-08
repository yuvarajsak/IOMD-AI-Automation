Feature: To Validate the autofill option and interaction are getting captured correctly in the GoodEggs application

  @all 
  Scenario Outline: TC_01- To validate the login functionality in the GoodEggs application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                             |
      | https://www.goodeggs.com/signin |

  @all @goodEg
  Scenario Outline: TC_02- To validate the forget password functionality in the GoodEggs application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user clicks "<sendbutton>" button by only name in the Website
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Others from interaction tab

    Examples: 
      | url                                            | business | sendbutton |
      | https://www.goodeggs.com/account/resetpassword | Goodeggs | Send       |

  @all @dyn_Exe
  Scenario Outline: TC_03- To validate the SignUp functionality in the GoodEggs application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects tokenised Username from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                             |
      | https://www.goodeggs.com/signup |

  @all
  Scenario Outline: TC_04- To validate products in the cart and Checkout functionality in the GoodEggs application as a Logged in user
    #PreRequisite - Signin with a user having products added to cart with minimum purchase value
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user clicks "<SignInbutton>" button by name in the Website
    #When user launches the GoodEggs Product URL
    #And user clicks "<linkName>" link by value in the Website
    #And user clicks "<addToBasket>" button by name in the Website
    When user launches the GoodEggs website "<cartURL>"
    And user clicks "<checkout>" button by name in the Website
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    And user selects personal Phonenumber from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user verifies the auto fill details for personal Phonenumber are filled as expected for the Website
    #the below first three steps varies for new user.. comment if you are using existing user with address data
    And I fill Address for Goodeggs
    And user clicks "<SaveContinue>" button by name in the Website
    And user clicks "<select>" button by StaticText with "<index>" in the Website
    And user Fills the card details in GoodEggs website
    When user enables the Extension
    And user selects personal Address from Extension
    Then user clicks Fill button from Extension
    And user clicks "<SaveContinue>" button by name in the Website
    Then user accepts the update popup for existing cards in IOMD Profile
    And user switches back to the IOMD application
    Then user verifies the card details is saved in IOMD Application
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Checkout from interaction tab
    And user clicks "<purchase>" button by only Staictext in the Website
    And user verifies the recent record under purchase tab

    Examples: 
      | url                             | purchase  | index | business | SaveContinue    | select | checkout            | SignInbutton | linkName           | addToBasket   | cartURL                         |
      | https://www.goodeggs.com/signin | purchases |     1 | Goodeggs | SAVE & CONTINUE | SELECT | CHECK OUT FOR TODAY | Sign In      | Organic Strawberry | ADD TO BASKET | https://www.goodeggs.com/basket |
