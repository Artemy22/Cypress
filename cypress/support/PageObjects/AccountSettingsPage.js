import { EditProfilePopup } from '../../support/PageObjects/EditProfilePopup'
import { BasicTest } from '../BasicTest';
import { ProfilePage } from './ProfilePage';
const editProfilePopup = new EditProfilePopup;
const basicTest = new BasicTest;
const profilePage = new ProfilePage;

export class AccountSettingsPage {

    titleAccountSettings = 'Account Settings';
    inputChangePassword = '[name="password"]';
    inputConfirmPassword = '[name="confirmPassword"]';
    buttonSubmitPasswordChanging = ':nth-child(3) > .css-1wo15pf > .css-8arwz3';
    inputChangeEmail = '[name="email"]';
    inputConfirmEmail = '[name="confirmEmail"]';
    buttonSubmitEmailChanging = ':nth-child(4) > .css-1wo15pf > .css-8arwz3';
    successMessage = 'Password successfully updated.';

    isOnTheAccountSettingsPage() {
        basicTest.isOnPageViaContains(this.titleAccountSettings);
    }

    fillInputChangePassword() {
        this.isOnTheAccountSettingsPage();
        basicTest.inputFiller(this.inputChangePassword, Cypress.env('temporaryPassword'))
        return this;
    }

    fillInputConfirmPassword() {
        basicTest.inputFiller(this.inputConfirmPassword, Cypress.env('temporaryPassword'))
        return this;
    }

    clickOnTheSubmitPasswordChangingButton() {
        basicTest.buttonClicker(this.buttonSubmitPasswordChanging);
        return this;
    }

    checkWetherPasswordChanged() {
        cy.contains(this.successMessage).should('be.visible');
        return this;
    }

    restoreDefaultPassword() {
        this.isOnTheAccountSettingsPage();
        basicTest.inputFiller(this.inputChangePassword, Cypress.env('user_password'));
        basicTest.inputFiller(this.inputConfirmPassword, Cypress.env('user_password'));
        basicTest.buttonClicker(this.buttonSubmitPasswordChanging);
        cy.contains(this.successMessage).should('be.visible');        
    }
}