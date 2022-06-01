import { BasicTest } from '../BasicTest'
const basicTest = new BasicTest();

export class EditProfilePopup {

    inputFirstName = '#firstName'
    inputLastname = '#lastName'
    inputJobTitle = '#job_title'
    inputOrganisation = '#org_name'
    inputEmailAddress = '#email'
    inputPhoneNumber = '#phone'
    inputLinkedInURL = '#linkedin_url'
    inputLocation = '#location'
    buttonSave = '#submit'

    fillInputFirstName() {
        basicTest.inputFiller(this.inputFirstName, 'updated_'+basicTest.randomName());
    }

    fillInputLastname() {
        basicTest.inputFiller(this.inputLastname, 'updated_'+basicTest.randomName());
    }

    fillInputJobTitle() {
        basicTest.inputFiller(this.inputJobTitle, 'updated_'+basicTest.randomName());
    }
    
    fillInputOrganisation() {
        basicTest.inputFiller(this.inputOrganisation, 'updated_'+basicTest.randomName());
    }
    
    fillInputEmailAddress() {
        //basicTest.inputFiller(this.inputEmailAddress, 'updated_'+basicTest.randomName());
    }
    
    fillInputPhoneNumber() {
        basicTest.inputFiller(this.inputPhoneNumber, 987654321);
    }
    
    fillInputLinkedInURL() {
        basicTest.inputFiller(this.inputLinkedInURL, 'updated_'+basicTest.randomName()+'.com');
    }
    
    fillInputLocation() {
        basicTest.inputFiller(this.inputLocation, 'updated_'+basicTest.randomName());
    }

    clickSaveButton() {
        basicTest.buttonClicker(this.buttonSave);
    }

    clickEditProfilePhoto() {
        basicTest.buttonClicker(this.buttonEditProfilePhoto)
    }    
}