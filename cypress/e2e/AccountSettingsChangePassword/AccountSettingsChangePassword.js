import { AccountSettingsPage } from '../../support/PageObjects/AccountSettingsPage';
import LoginPage from '../../support/PageObjects/LoginPage';
import { ProfilePage } from '../../support/PageObjects/ProfilePage'

describe('Basic Steps to avoid dupes', () => {
    const loginPage = new LoginPage;
    const profilePage = new ProfilePage;
    const accountSettingsPage = new AccountSettingsPage;

    Given('User is logged in to the system', () => {
        cy.visit(Cypress.env('base_url')).contains('Sign in to DFX');
        loginPage.fillEmail().fillPassword().clickSubmitButton();
    })

    Then('I navigate to the Account Settings page', () => {
        profilePage.clickDropDownUser().clickUSerDropDownAccountSettings();
        accountSettingsPage.isOnTheAccountSettingsPage();
    })

    Then('I fill the Change Password input out', () => {

    })

    Then('I fill the Confirm Password input out', () => {

    })

    When('I click on the Submit button', () => {

    })

    Then('I see the message "Password successfully updated."', () => {

    })

    Then('Then Sign out', () => {

    })

    When('I use the newly created password to be logged in', () => {

    })

    Then('I\'m logged in', () => {

    })
})