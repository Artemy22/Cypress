import LoginPage from '../../support/PageObjects/LoginPage';

describe('Automation Test for restoring password', function () {

    before(function () {
        cy.fixture('Restore Password').then(function (data) {
            this.data = data;
        })
    })

    const loginPage = new LoginPage();

    Given('I navigate to the login page', () => {
        cy.visit(Cypress.env('base_url'))
        cy.contains('Sign In To')
    })

    When('I click on the Forgot Password button', () => {
        loginPage.clickForgotPasswordLink();
    });

    When('I enter my email', () => {
        loginPage.fillEmailForRestorePassword();
    });

    When('I click on the Reset Password button', () => {
        loginPage.clickResetPasswordButton();
    });

    Then('I am directed to the reset Password Confirmation page', () => {
        loginPage.isOnConfirmationPage();
    })

    When('I click on the Done button', () => {
        loginPage.clickDoneButtonOnConfirmationPage();
    })

    Then('I am redirected to the login page', () => {
        loginPage.isOnLoginPage();
    })    
});