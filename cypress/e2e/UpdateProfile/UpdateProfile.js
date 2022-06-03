

import  LoginPage from '../../support/PageObjects/LoginPage';
import { ProfilePage } from '../../support/PageObjects/ProfilePage'
import { EditProfilePopup } from '../../support/PageObjects/EditProfilePopup'

describe('Automation Test for the Updating profile', function () {
    const loginPage = new LoginPage;
    

    Given('I navigate to the login page', () => {
        cy.visit(Cypress.env('base_url'));
        cy.contains('Sign in to DFX');
    })   

    Then('Navigate to the profile page', () => {
        loginPage.fillEmail().fillPassword().clickSubmitButton();
    })

    const profilePage = new ProfilePage;
    const editProfilePopup = new EditProfilePopup;

    Then('Click on the edit profile button', () => {
        profilePage.clickButtonEditProfile();
    })

    Then('I update all available fields except an email and a profile photo', () => {
        editProfilePopup.updateFirstName()
        .updateLastname()
        .updateJobTitle()
        .updateLinkedInURL()
        .updateLocation()
        .updateOrganisation()
        .updatePhoneNumber();
    })

    Then('Click on the save button', () => {
        editProfilePopup.clickSaveButton();
    })

    Then('My profile became updated', () => {
        profilePage.checkWhetherUpdated();
    })
});