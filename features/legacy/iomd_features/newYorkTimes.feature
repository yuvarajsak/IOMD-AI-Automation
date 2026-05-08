Feature: I2i_36_Validates the auofill operation in the hindustan times website after enabling the extension.


  @subscriptionNewYork @all @ny1
  Scenario Outline: 12I_36_TC02- Validates the subscription on by using the autofill extension
    When user completes onboarding flow with card data
    When user launches the website "<url>"
    #And user clicks "<subscribebtn>" button by only Staictext in the Website
    #When user enables the Extension
    #And user selects tokenised Email from Extension
    #Then user clicks Fill button from Extension
    #Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user enters valid email in Nytimes
    Then user clicks on the continue button
    Then user accepts the popup
    Then user accepts the popup
    And user enters password in the signup page of nytimes
    And user clicks "<createaccbutton>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    And user clicks "<cardSelection>" button by only Staictext in the Website
    When user enables the Extension
    And user selects card details
    Then user clicks Fill button from Extension
    And user clicks "<continue>" button by name in nytimes
    #And user clicks "<continue>" button by name with "<index>" in the Website
    Then user accepts the popup
    Then user accepts the popup
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    #And user verifies Checkout from interaction tab
    And user clicks "<purchase>" button by only Staictext in the Website
    And user verifies the recent record under purchase tab

    Examples: 
      | url                                                | loginbutton | createaccbutton | business | subscribebtn  | cardSelection        | continue | index | purchase  |
      | https://myaccount.nytimes.com/get-started/payment? | Log In      | Create Account  | Nytimes  | Subscribe now | Credit or Debit Card | Continue |     1 | PURCHASES |

      
  #											*********************************************************************
  #   									************************* REGRESSION SUITES *************************
  #											*********************************************************************
  
    @newYorkTimes @all @updated 
  Scenario Outline: 12I_NY_TC01- Validates the sign up in the Nytimes
    When user completes onboarding flow
    When user launches the website "<url>"
    When user enables the Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for tokenised Email are filled as expected for the Website
    And user enters random email in Email Id textbox
    Then user clicks on the continue button
    And user enters password in the signup page of nytimes
    And user clicks "<createaccbutton>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user verifies Register from interaction tab

    Examples: 
      | url                                       | createaccbutton | business |
      | https://myaccount.nytimes.com/auth/login? | Create Account  | Nytimes  |
  
      @subscriptionNewYork @all 
  Scenario Outline: 12I_NY_TC03- Validates the subscription on by using the autofill extension
    When user completes onboarding flow with card data
    When user launches the website "<url>"
    And user enters valid email in Nytimes
    Then user clicks on the continue button
    Then user accepts the popup
    Then user accepts the popup
    And user enters password in the signup page of nytimes
    And user clicks "<createaccbutton>" button by only name in the Website
    Then user accepts the popup
    Then user accepts the popup
    And user clicks "<cardSelection>" button by only Staictext in the Website
    When user enables the Extension
    And user selects card details
    Then user clicks Fill button from Extension
    And user clicks "<continue>" button by name in nytimes
    Then user accepts the popup
    Then user accepts the popup
    When user switches back to the IOMD application
    And user verifies and clicks on the business tab
    And user clicks "<business>" business by only name in the IOMD Transactions
    And user clicks "<purchase>" button by only Staictext in the Website
    And user verifies the recent record under purchase tab

    Examples: 
      | url                                                | loginbutton | createaccbutton | business | subscribebtn  | cardSelection        | continue | index | purchase  |
      | https://myaccount.nytimes.com/get-started/payment? | Log In      | Create Account  | Nytimes  | Subscribe now | Credit or Debit Card | Continue |     1 | PURCHASES |
      