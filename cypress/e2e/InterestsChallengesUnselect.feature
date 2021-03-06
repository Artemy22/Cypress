Feature: As a user I want to unselect my keys of Interests and Challenges chosen before

Scenario: Unselect Interests and Challenges
    Given User is logged in to the system
    When I unselect first 3 Interests 
    And I click on the Save button to save my changes
    And I unselect first 3 Challenges
    And I click on the Save button to save my changes
    Then Interests and Challenges are unselected
    And Then Sign out