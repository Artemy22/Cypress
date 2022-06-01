import { BasicTest } from '../BasicTest'
const basicTest = new BasicTest();

export class EditProfilePopup {

    /*LOCATORS*/
    inputFirstName = '#firstName'
    inputLastname = '#lastName'
    inputJobTitle = '#job_title'
    inputOrganisation = '#org_name'
    inputEmailAddress = '#email'
    inputPhoneNumber = '#phone'
    inputLinkedInURL = '#linkedin_url'
    inputLocation = '#location'
    buttonSave = 'Save'

    /*CURRENT VALUES*/
    FirstName;
    Lastname;
    JobTitle;
    Organisation;
    EmailAddress;
    PhoneNumber;
    LinkedInURL;
    Location;

    updateFirstName() {
        this.FirstName = 'updated_' + basicTest.randomName();
        basicTest.inputClearer(this.inputFirstName).inputFiller(this.inputFirstName, this.FirstName);
        return this;
    }

    updateLastname() {
        this.Lastname = 'updated_' + basicTest.randomName();
        basicTest.inputClearer(this.inputLastname).inputFiller(this.inputLastname, this.Lastname);
        return this;
    }

    updateJobTitle() {
        this.JobTitle = 'updated_' + basicTest.randomName();
        basicTest.inputClearer(this.inputJobTitle).inputFiller(this.inputJobTitle, this.JobTitle);
        return this;
    }

    updateOrganisation() {
        this.Organisation = 'updated_' + basicTest.randomName();
        basicTest.inputClearer(this.inputOrganisation).inputFiller(this.inputOrganisation, this.Organisation);
        return this;
    }

    updateEmailAddress() {
        this.EmailAddress = 'updated_' + basicTest.randomName();
        //basicTest.inputFiller(this.inputEmailAddress, 'updated_'+basicTest.randomName());
        return this;
    }

    updatePhoneNumber() {
        this.PhoneNumber = 987654321;
        basicTest.inputClearer(this.inputPhoneNumber).inputFiller(this.inputPhoneNumber, this.PhoneNumber);
        return this;
    }

    updateLinkedInURL() {
        this.LinkedInURL = 'https://updated' + basicTest.randomName() + '.com';
        basicTest.inputClearer(this.inputLinkedInURL).inputFiller(this.inputLinkedInURL, this.LinkedInURL);
        return this;
    }

    updateLocation() {
        this.Location = 'updated_' + basicTest.randomName();
        basicTest.inputClearer(this.inputLocation).inputFiller(this.inputLocation, this.Location);
        return this;
    }

    clickSaveButton() {
        cy.contains(this.buttonSave).click();
        return this;
    }

    clickEditProfilePhoto() {
        basicTest.buttonClicker(this.buttonEditProfilePhoto)
        return this;
    }

    checkWhetherUpdated() {
        cy.contains("'"+this.EmailAddress+"'").
            contains("'"+this.FirstName+"'").
            contains("'"+this.JobTitle+"'").
            contains("'"+this.Lastname+"'").
            contains("'"+this.LinkedInURL+"'").
            contains("'"+this.Location+"'").
            contains("'"+this.Organisation+"'").
            contains("'"+this.PhoneNumber+"'");
        return this;
    }
}