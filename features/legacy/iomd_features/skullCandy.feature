Feature: To Validate the autofill option and interaction are getting captured correctly in the SkullCandy application

  @all
  Scenario Outline: TC_01- To validate the login functionality in the SkullCandy application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website

    Examples: 
      | url                                 |
      | https://www.skullcandy.eu/login.php |

  @all
  Scenario Outline: TC_02- To validate the forget password functionality in the SkullCandy application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user clicks "<forgetPwd>" button by only name in the Website
     Then user accepts the popup
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies PwdChange from interaction tab

    Examples: 
      | url                                                       | forgetPwd      |business   |
      | https://www.skullcandy.eu/login.php?action=reset_password | RESET PASSWORD |Skullcandy |

  @all
  Scenario Outline: TC_03- To validate the SignUp functionality in the SkullCandy application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    And user selects personal Phonenumber from Extension
    And user selects personal Address from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    Then user verifies the auto fill details for personal Zipcode are filled as expected for the Website
    Then user verifies the auto fill details for personal Phonenumber are filled as expected for the Website

    Examples: 
      | url                                                       |
      | https://www.skullcandy.eu/login.php?action=create_account |

  @all
  Scenario Outline: TC_04- To validate the newsletter functionality in the SkullCandy application
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    And user selects tokenised Email from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user clicks "<submitbutton>" button by only name in the Website
    Then user accepts the popup
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Others from interaction tab

    Examples: 
      | url                                 | submitbutton |business   |
      | https://www.skullcandy.eu/login.php | enter        |Skullcandy |

  @all
  Scenario Outline: TC_05- To validate the Checkout functionality in the SkullCandy application
    When user completes onboarding flow with card data
    When user launches the website "<url>"
    #And user selects first product from SkullCandy application
    And user clicks "<cart>" button by name with "<index>" in the Website
    When user launches the website "<carturl>"
    And user clicks "<proceedcheckout>" button by only Staictext in the Website
    Then user accepts the popup
    Then user accepts the popup
    When user enables the Extension
    And user selects tokenised Email from Extension
    And user selects personal Username from Extension
    And user selects personal Phonenumber from Extension
    And user selects personal Address from Extension
    Then user clicks Fill button from Extension
    When user enables the Extension
    And user selects personal Address from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    Then user verifies the auto fill details for personal LastName are filled as expected for the Website
    And user verifies the auto fill details for personal Phonenumber are filled as expected for the Website
    When user fills address for skullcandy
    And user clicks "<continue>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    And user clicks "<continue>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    And user clicks "<cardSelection>" button by only Staictext in the Website
    When user enables the Extension
    And user selects card details
    Then user clicks Fill button from Extension
    #When user Fills the card details in SkullCandy website
    And user clicks "<placeorder>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Checkout from interaction tab
    And user clicks "<purchase>" button by only Staictext in the Website
    And user verifies the recent record under purchase tab

    Examples: 
      | url                                                                  | cardSelection            | purchase  | business   | continue | cart        | index | carturl                             | proceedcheckout | placeorder  |
      | https://www.skullcandy.com/all-love-crusher-evo-wireless-headphones/ | Credit Card / Debit Card | purchases | Skullcandy | CONTINUE | ADD TO CART |     2 | https://www.skullcandy.com/cart.php | CHECKOUT        | PLACE ORDER |
