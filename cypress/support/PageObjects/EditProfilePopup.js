import { BasicTest } from '../BasicTest'
const basicTest = new BasicTest()

let valueJobTitle = ''
let valueLinkedInURL = ''
let valueFirstName = ''
let valueLastName = ''
let valueCompany = ''
let valueLocation = ''
let valueToCheck = [];

export class EditProfilePopup {

    /*LOCATORS*/
    inputFirstName = '#firstName';
    inputLastname = '#lastName';
    inputJobTitle = '#job_title';
    inputOrganisation = '#org_name';
    inputEmailAddress = '#email';
    inputPhoneNumber = '#phone';
    inputLinkedInURL = '#linkedin_url';
    inputLocation = '#location';
    buttonSave = 'Save';
    divDialog = '[role="dialog"]';




    getValueJobTitle(index) {
        return valueToCheck[index];
    }

    checkWhetherPopupClosed() {
        let isClosed = new Boolean(cy.get(this.divDialog).should('not.exist'));
        return isClosed;
    }

    updateFirstName() {

        valueFirstName = 'updated_' + basicTest.randomName();
        basicTest.inputClearer(this.inputFirstName).inputFiller(this.inputFirstName, valueFirstName);
        return this;
    }

    updateLastname() {
        valueLastName = 'updated_' + basicTest.randomName();
        basicTest.inputClearer(this.inputLastname).inputFiller(this.inputLastname, valueLastName);
        return this;
    }

    updateJobTitle() {
        valueToCheck.push(valueJobTitle = 'updated_' + basicTest.randomName())
        basicTest.inputClearer(this.inputJobTitle).inputFiller(this.inputJobTitle, valueJobTitle);
        return this;
    }

    updateOrganisation() {
        valueToCheck.push(valueCompany = 'updated_' + basicTest.randomName());
        basicTest.inputClearer(this.inputOrganisation).inputFiller(this.inputOrganisation, valueCompany);
        return this;
    }

    updatePhoneNumber() {
        var valuePhoneNumber = '987654321';
        basicTest.inputClearer(this.inputPhoneNumber).inputFiller(this.inputPhoneNumber, valuePhoneNumber);
        return this;
    }

    updateLinkedInURL() {
        valueToCheck.push(valueLinkedInURL = 'https://updated' + basicTest.randomName() + '.com');
        basicTest.inputClearer(this.inputLinkedInURL).inputFiller(this.inputLinkedInURL, valueLinkedInURL);
        return this;
    }

    updateLocation() {
        valueToCheck.push(valueLocation = 'updated_' + basicTest.randomName());
        basicTest.inputClearer(this.inputLocation).inputFiller(this.inputLocation, valueLocation);
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

    getValueJobTitle(index) {
        return valueToCheck[index];
    }

}