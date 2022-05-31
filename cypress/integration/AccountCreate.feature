Feature: As a user I want to create my own account, without email checking

Scenario: Account creation
    Given I navigate to the login page
    When I click on the Sign Up button
    And I'm directed to the Create your DFX account page
    Then I fill out all mandatory fields
    And Click on the Submit button
    Then I'm directed to the Verification page