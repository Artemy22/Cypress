Feature: As a user I want to get my profile updated

Scenario: Update all fields except an email and a profile picture
    Given I navigate to the login page
    Then Navigate to the profile page
    And Click on the edit profile button
    Then I update all available fields except an email and a profile photo
    And Click on the save button
    Then My profile became updated