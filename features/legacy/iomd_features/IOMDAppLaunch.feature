Feature: i2i_37_Launching the IOMD Appplication

  Background: 
    Given user launches the application

  Scenario Outline: IOMD-TC01_To Validate IOMD Application launch and fetching the user details
    When user enters the "<emailId>" in the inputbox
    Then user clicks on the fetch button
    When user verifies the display of the "<UserFullName>" in the list
    When user verifies the "<mailId>" and "<phoneNumber>" and "<addressDetails>" in the page
    Then user veriifes the dispay of the "<userType>" in the page
    When user verifies the  anonomyous "<anonomyousMailId>" and "<anonomyousPhoneNumber>" and "<anonomyousAddressDetails>" in the user profile page
    Then user veriifes the anonomyous dispay of the "<anonomyousUserType>" in the user profile page


    Examples: 
      | emailId          | UserFullName    | mailId           | phoneNumber | addressDetails | userType | anonomyousMailId         | anonomyousPhoneNumber | anonomyousAddressDetails | anonomyousUserType |
      | hiring@iomd.info | Rohan Mahadevan | hiring@iomd.info |  4085551212 | address        | Primary  | test2.ideas2it@iomd.info |            4081113232 | address                  | Anonmyous          |




  Scenario Outline: IOMD-TC02_To Validate no user found message is getting displayed after entering the un-registered mail
  
  
    When user enters the "<emailId>" in the inputbox
    Then user clicks on the fetch button
    When User verifies the display of the no profile found message after entering invalid details in the user page

    Examples: 
      | emailId         |
      | test2@iomd.info |
      
      
  Scenario Outline: IOMD_TC03_To Validate message alert ,when user tries to click the fetch button directly without entering the mail id or in invalid format
   
    When user enters the "<emailId>" in the inputbox
    Then user clicks on the fetch button
    When User verifies the display of the enter valid email id alert message popup after entering mail id in incorrect format
    
    Examples:
    |emailId|
    |vcc|
    ||
   
   
   
   
   
