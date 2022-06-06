Feature: As a user I want to get my profile photo to be updated

Scenario: Update a profile picture
    Given I navigate to the login page
    Then Navigate to the profile page
    And Click on the edit profile photo button
    Then I upload a new profile photo
    And Click on the save button
    Then My profile became updated