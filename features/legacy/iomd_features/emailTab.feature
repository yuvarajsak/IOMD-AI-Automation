Feature: I2i_36_Validates the aurofill operation in the coravin website after enabling the extension.

  @coravin @all
  Scenario Outline: I2i_TC01_Validates the user is able to fill user name and email id in the coravin website for the newsletter
    When user enters the "<emailId>" in the inputbox
    Then user clicks on the fetch button
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the coravin website "<url>"
    When user enables the extension and verifies the expected details are present for the page
    Then user verifies the display of the header "<HeaderValue>"
    When user verifies the verifies the display of the feedback linkn "<feedBack>"
    When User verifies the display of the name "<name>" and email "<emailId>" headers present in the extension
    Then user selects the value from the extension and clicks on the fill button
    When user verifies the details are getting entered in the correct field as expected

    Examples: 
      | emailId          | url                     | HeaderValue                                | feedBack | name | emailId |
      | hiring@iomd.info | https://www.coravin.com | Select the data you want from each section | Feedback | NAME | EMAIL   |

  @coravinSignUp @all
  Scenario Outline: I2i_TC02_Validates to create an account in coravin by using the autofill extension
    When user enters the "<emailId>" in the inputbox
    Then user clicks on the fetch button
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the coravin website "<url>"
    Then user clicks on the signInOrSignUpButton in the coravin website
    When user clicks create account button
    When user enables the extension and verifies the expected details are present for the page
    Then user selects the value from the extension and clicks on the fill button
    When user verifies the details are getting entered as expected in the field box

    Examples: 
      | emailId          | url                     |
      | hiring@iomd.info | https://www.coravin.com |

  @coravinSignIn @all
  Scenario Outline: I2i_TC03_Validates user can able to sign in using coravin by using the autofill extension
    When user enters the "<emailId>" in the inputbox
    Then user clicks on the fetch button
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the coravin website "<url>"
    Then user clicks on the signInOrSignUpButton in the coravin website
    When user clicks on the sign in button
    When user enables the extension and verifies the expected details are present for the page
    Then user selects the value from the extension and clicks on the fill button
    When user verifies the display of the autofill det ails are entered as expected

    Examples: 
      | emailId          | url                     |
      | hiring@iomd.info | https://www.coravin.com |

  @coravinInvalidData @all @updated
  Scenario Outline: I2i_TC04_Validates the details are not getting present when user tries to fetch the profile for invalid mail
    When user enters the "<emailId>" in the inputbox
    Then user clicks on the fetch button
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the coravin website "<url>"
    When user enables the extension and verifies the expected details are present for the page
    Then user verifies the autofill extension and verifies no details is getting displayed

    Examples: 
      | emailId        | url                     |
      | test@iomd.info | https://www.coravin.com |

  @endToendFlow @all @updated
  Scenario Outline: I2i_TC05_Validates the product in the cart and user tries to checkout the items
    When user enters the "<emailId>" in the inputbox
    Then user clicks on the fetch button
    When user navigates to the settings application and enables the extension
    Then user navigates to the safari application
    When user launches the coravin website "<url>"
    Then user clicks on the signInOrSignUpButton in the coravin website
    When user clicks on the sign in button
    When user enables the extension and verifies the expected details are present for the page
    Then user selects the value from the extension and clicks on the fill button
    Then user clicks on the signIn button
    When user clicks on the checkout Icon and verifies the product
    Then user clicks on the continue to checkout button in checkout page
    When user enables the extension and verifies the expected details are present for the page
    When user selects the address and phone number "<phoneNumber>" in the autofill option
    Then user selects the value from the extension and clicks on the fill button
    When user clicks on the get shipping option "<GetShippingOption>"
    When user clicks on the continue to payment button "<continueToPayment>"
    When user enables the extension and verifies the expected details are present for the page
    Then user clicks on the credit card details and clicks on the fill button

    Examples: 
      | emailId          | url                     | phoneNumber | GetShippingOption | continueToPayment |
      | hiring@iomd.info | https://www.coravin.com | phoneNumber | GetShippingOption | paymentmode       |