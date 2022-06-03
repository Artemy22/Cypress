import CreateAccountPage from '../../support/PageObjects/CreateAccountPage';
import LoginPage from '../../support/PageObjects/LoginPage';

describe('Automation Test for the account creation', function () {
    const createAccountPage = new CreateAccountPage;
    const loginPage = new LoginPage;

    Given('I navigate to the login page', () => {
        cy.visit(Cypress.env('base_url'));
        cy.contains('Sign in to DFX');
    })

    When('I click on the Sign Up button', () => {
        loginPage.clickSignUpButton();
    });

    When('I\'m directed to the Create your DFX account page', () => {
        cy.contains('Create your DFX account');
    });

    Then('I fill out all mandatory fields', () => {
        createAccountPage.checkWhetherCookiesButtonPresented().fillFirstName().fillLastName().fillEmailAddress().fillCreatePassword().fillRepeatPassword();
    })

    When('Click on the Submit button', () => {
        createAccountPage.clickbuttonSubmit();
    });

    Then('I\'m directed to the Verification page', () => {
        createAccountPage.isOnConfirmationPage();
        createAccountPage.PreparationToTheNextRun();
    })
});