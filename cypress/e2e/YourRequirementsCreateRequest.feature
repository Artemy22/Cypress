Feature: As a user I want to create my request 

Scenario: Create a Software Engineering discipline request 
    Given User is logged in to the system
    Then As a user I navigate to the Your Requirements page
    And Choose the Software Engineering discipline
    When I fill all mandatory fields out
    And I click on Create request button
    Then I have my account created
    And I directed to the Skill Match step
    Then I check my request details to fit the ones I filled on the Create request step
    And I cancel the request
    And Then Sign out
    