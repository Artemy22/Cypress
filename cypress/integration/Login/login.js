import LoginPage from '../../support/PageObjects/LoginPage';

describe('Automation Test for the Login Page', function () {

    before(function () {
        cy.fixture('Login').then(function (data) {
            this.data = data;
        })
    })

    const loginPage = new LoginPage();

    Given('I navigate to the login page', () => {
        cy.visit(Cypress.env('base_url'))
        cy.contains('Sign In To')
    })

    When('I enter credentials', () => {
        loginPage.fillEmail();
        loginPage.fillPassword();
    });

    When('Click on the Login bnt', () => {
        loginPage.clickSignInButton();
    });

    Then('My user is logged in', () => {
        cy.contains('[class=signout-link]', 'AI')
    })
});