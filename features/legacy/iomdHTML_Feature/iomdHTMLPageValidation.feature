Feature: I2i_Validates IOMD Pay feature and cheecks the order placed data in Magento

  @iomd_html @all
  Scenario Outline: TC_01 User validate autofill functionality on application form in Next Insurance
    When user completes onboarding flow with card data
    When user launches the website "<url>"
    Then user clicks "<NextInsurance>" button by only name in the Website
    When user enables the Extension
    Then user selects personal Username from Extension
    And user selects personal Address from Extension
    And user selects personal Phonenumber from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    And user verifies the auto fill details for personal LastName are filled as expected for the Website
    And user verifies the auto fill details for personal Address1 are filled as expected for the website
    And user verifies the auto fill details for personal Phonenumber are filled as expected for the Website

    Examples: 
      | url                                    | NextInsurance  |
      | http://localhost:5500/addressInfo.html | Next Insurance |

  @iomd_html @all
  Scenario Outline: TC_02 User validate autofill functionality on signup form in Amazon
    When user completes onboarding flow with card data
    When user launches the website "<url>"
    Then user clicks "<Commerce>" button by only name in the Website
    When user enables the Extension
    Then user selects personal Username from Extension
    And user selects personal Phonenumber from Extension
    Then user clicks Fill button from Extension
    Then user verifies the auto fill details for personal Username are filled as expected for the Website
    And user verifies the auto fill details for personal Phonenumber are filled as expected for the Website

    Examples: 
      | url                                   | Commerce |
      | http://localhost:5500/signupInfo.html | Commerce |

  @iomd_html @all
  Scenario Outline: TC_03 User validate autofill functionality on application form in FourSeasons
    When user completes onboarding flow with card data
    When user launches the website "<url>"
    Then user clicks "<FourSeasons>" button by only name in the Website
    When user enables the Extension
    Then user selects personal Username from Extension
    And user selects personal Address from Extension
    And user selects personal Phonenumber from Extension
    And user selects tokenised Email from Extension
    And user selects card details
    Then user clicks Fill button from Extension
    And user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    And user verifies the auto fill details for personal LastName are filled as expected for the Website
    And user verifies the auto fill details for personal Address1 are filled as expected for the website
    And user verifies the auto fill details for personal Phonenumber are filled as expected for the Website
    And user verifies the auto fill details for card number are filled as expected for the Website

    Examples: 
      | url                                    | FourSeasons  |
      | http://localhost:5500/addressInfo.html | Four Seasons |
      
      @iomd_html @all
  Scenario Outline: TC_04 User validate autofill functionality on application form in Hertz
    When user completes onboarding flow with card data
    When user launches the website "<url>"
    Then user clicks "<FourSeasons>" button by only name in the Website
    When user enables the Extension
    Then user selects personal Username from Extension
    And user selects personal Address from Extension
    And user selects personal Phonenumber from Extension
    And user selects tokenised Email from Extension
    And user selects card details
    Then user clicks Fill button from Extension
    And user verifies the auto fill details for tokenised Email are filled as expected for the Website
    Then user verifies the auto fill details for personal FirstName are filled as expected for the Website
    And user verifies the auto fill details for personal LastName are filled as expected for the Website
    And user verifies the auto fill details for personal Address1 are filled as expected for the website
    And user verifies the auto fill details for personal Phonenumber are filled as expected for the Website
    And user verifies the auto fill details for card number are filled as expected for the Website

    Examples: 
      | url                                    | FourSeasons  |
      | http://localhost:5500/addressInfo.html | Four Seasons |
