Feature: As a user I want to choose my keys of Interests and Challenges

Scenario: Select Interests and Challenges
    Given User is logged in to the system
    When I choose first 3 Interests 
    And I choose first 3 Challenges
    And I click on the Save button to save my changes
    Then Interests and Challenges are chosen
    And Then Sign out