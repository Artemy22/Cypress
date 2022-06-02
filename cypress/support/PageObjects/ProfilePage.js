import { EditProfilePopup } from '../../support/PageObjects/EditProfilePopup'

const editProfilePopup = new EditProfilePopup;

class ProfilePage {
    dropDownUser = '.css-b4y3aj';
    buttonSignOut = '[href="/sign-out"]';

    buttonEditProfile = '.css-59wuf6';

    checkWhetherUpdated() {   
        //editProfilePopup.divDialog
        
        //cy.contains('updated_QA-uW6Ln')
        cy.log('editProfilePopup.EmailAddress -> ',"'"+editProfilePopup.EmailAddress+"'")
        /*cy.contains("'"+editProfilePopup.EmailAddress+"'").
            contains("'"+editProfilePopup.FirstName+"'").
            contains("'"+editProfilePopup.JobTitle+"'").
            contains("'"+editProfilePopup.Lastname+"'").
            contains("'"+editProfilePopup.LinkedInURL+"'").
            contains("'"+editProfilePopup.Location+"'").
            contains("'"+editProfilePopup.Organisation+"'").
            contains("'"+editProfilePopup.PhoneNumber+"'");*/
        return this;
        
    }



    clickDropDownUser(){
        cy.get(this.dropDownUser).click();
        return this;
    }
    clickButtonSubit(){
        cy.get(this.buttonSignOut).click();
        return this;
    }
    clickButtonEditProfile() {
        cy.get(this.buttonEditProfile).click();
        return this;
    }
}

export default ProfilePage