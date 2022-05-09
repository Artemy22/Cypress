Feature: Restore Password, without email checking.

    Scenario: Click on the forgot password icon
        Given I navigate to the login page
        When I click on the Forgot Password button
        And I enter my email
        And I click on the Reset Password button
        Then I am directed to the reset Password Confirmation page
        When I click on the Done button
        Then I am redirected to the login page