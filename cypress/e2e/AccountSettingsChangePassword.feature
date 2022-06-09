Feature: As a user I want to change my dfx password

Scenario: The Password changing flow
    Given User is logged in to the system
    Then I navigate to the Account Settings page
    And I fill the Change Password input out
    And I fill the Confirm Password input out
    When I click on the Submit button
    Then I see the message "Password successfully updated."
    And Then Sign out
    When I use the newly created password to be logged in
    Then I'm logged in
    And I restore the default password to avoid existing tests to be failed
    And Then Sign out
