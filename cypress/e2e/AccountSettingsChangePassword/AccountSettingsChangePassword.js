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
        accountSettingsPage.fillInputChangePassword();
    })

    Then('I fill the Confirm Password input out', () => {
        accountSettingsPage.fillInputConfirmPassword();
    })

    When('I click on the Submit button', () => {
        accountSettingsPage.clickOnTheSubmitPasswordChangingButton();
    })

    Then('I see the message "Password successfully updated."', () => {
        accountSettingsPage.checkWetherPasswordChanged();
    })

    Then('Then Sign out', () => {
        profilePage.signOut();
    })

    When('I use the newly created password to be logged in', () => {
        loginPage.fillEmail().fillTemporaryPassword().clickSubmitButton();
    })

    Then('I restore the default password to avoid existing tests to be failed', () => {
        accountSettingsPage.restoreDefaultPassword();
    })

    Then('I\'m logged in', () => {
        profilePage.checkWhetherProfilePageLoaded().clickDropDownUser().clickUSerDropDownAccountSettings();        
    })
})