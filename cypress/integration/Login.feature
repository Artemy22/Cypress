Feature: Login

Scenario: Ebate Login
    Given I navigate to the login page
    When I enter credentials
    And Click on the Login bnt
    Then My user is logged in