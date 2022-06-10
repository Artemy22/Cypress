
import { AccountSettingsPage } from '../../support/PageObjects/AccountSettingsPage';
import LoginPage from '../../support/PageObjects/LoginPage';
import { ProfilePage } from '../../support/PageObjects/ProfilePage'
import { YourRequirementsPage } from '../../support/PageObjects/YourRequirementsPage';

describe('Basic Steps to avoid dupes', () => {
    const loginPage = new LoginPage;
    const profilePage = new ProfilePage;
    const accountSettingsPage = new AccountSettingsPage;
    const yourRequirements = new YourRequirementsPage;

    Given('User is logged in to the system', () => {
        cy.visit(Cypress.env('base_url')).contains('Sign in to DFX');
        loginPage.fillEmail().fillPassword().clickSubmitButton();
    })

    Then('As a user I navigate to the Your Requirements page', () => {
        profilePage.clickOnYourRequirementsMainHeader();
    })

    Then('Choose the Software Engineering discipline', () => {
        yourRequirements.isONYourRequirementsPage().clickDisciplineButtonSoftwareEngineering();        
    })

    When('I fill all mandatory fields out', () => {
        yourRequirements.fillOutCreateRequestForm().fillOutPreferredAttributesInput();
    })

    Then('I click on Create request button', () => {
        yourRequirements.clickButtonCreateRequest();
    })

    Then('I directed to the Skill Match step', () => {
        yourRequirements.isOnPageSkillMatch();
    })

    Then('I check my request details to fit the ones I filled on the Create request step', () => {
        yourRequirements.checkSkillMatchStepOfCreatedRequirements();
    })

    Then('I cancel the request', () => {
        yourRequirements.cancelRequest();
    })

    Then('Then Sign out', () => {
        profilePage.signOut();
    })
})