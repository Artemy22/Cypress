

import  LoginPage from '../../support/PageObjects/LoginPage';
import { ProfilePage } from '../../support/PageObjects/ProfilePage'
import { EditProfilePopup } from '../../support/PageObjects/EditProfilePopup'

describe('As a user I want to get my profile photo to be updated', function () {
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

    Then('Click on the edit profile photo button', () => {
        profilePage.clickUploadPhotoButton();
    })

    Then('I upload a new profile photo', () => {
        profilePage.fileUploaderProfilePicture();        
    })

    Then('Click on the save button', () => {
        profilePage.clickSubmitOnUploadPhotoPopup();
    })

    Then('My profile became updated', () => {
        //profilePage.checkWhetherUpdated();
    })
});