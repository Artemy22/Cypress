import LoginPage from '../../support/PageObjects/LoginPage';
import ProfilePage from '../../support/PageObjects/ProfilePage'

describe('Automation Test for the Login Page', function () {

    after(function () {

        const profilePage = new ProfilePage;
        profilePage.clickDropDownUser().clickButtonSubit();
        cy.contains('Submit');

    })

    const loginPage = new LoginPage;

    Given('I navigate to the login page', () => {

        cy.visit(Cypress.env('base_url'));
        cy.contains('Sign in to DFX');

    })

    When('I enter credentials', () => {
        loginPage.fillEmail();
        loginPage.fillPassword();
    });

    When('Click on the Login bnt', () => {
        loginPage.clickSubmitButton();
    });

    Then('My user is logged in', () => {

        cy.contains('Your profile');
    })
});
