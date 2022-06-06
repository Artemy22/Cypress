import { EditProfilePopup } from '../../support/PageObjects/EditProfilePopup'
import { BasicTest } from '../BasicTest';
const editProfilePopup = new EditProfilePopup;
const basicTest = new BasicTest;
let fileRandomizer = '';

export class ProfilePage {
    locatorDropDownUser = '.css-b4y3aj';
    buttonSignOut = '[href="/sign-out"]';
    buttonEditProfile = '.css-59wuf6';
    locatorFirstAndLastNames = '.css-1leenta';
    locatorJobPosition = '.css-xmmubi > :nth-child(3) > :nth-child(2)';
    locatorCompanyName = '.css-xmmubi > :nth-child(3) > :nth-child(3)';
    locatorLocation = '.css-xmmubi > :nth-child(3) > :nth-child(4)';
    locatorPhoneNumber = '.css-xmmubi > :nth-child(3) > :nth-child(5)';
    locatorLinkedin = ':nth-child(6) > .css-1bzz5bn';
    addPhotoPlusButton = '.css-buceqx';
    uploadPhotoPopupChooseFileButton = '[name="fileUpload"]';
    uploadPhotoPopupSubmitButton = '[class="css-8arwz3"]'; // contains

    /* CURRENT VALUES */
    _valueFirstName;
    _valueLastName;
    _valueJobTitle;
    _valueCompany;
    _valueLocation;
    _locationPhoneNumber;

    clickDropDownUser() {
        basicTest.buttonClicker(this.locatorDropDownUser);
        return this;
    }
    clickButtonSignOut() {
        basicTest.buttonClicker(this.buttonSignOut);
        return this;
    }
    clickButtonEditProfile() {
        cy.get(this.buttonEditProfile).click();
        return this;
    }

    checkWhetherUpdated() {
        if (editProfilePopup.checkWhetherPopupClosed() == true) {
            cy.reload().then(() => {
                cy.get(this.locatorJobPosition).then(($text) => {
                    let txt = $text.text();
                    if (txt == editProfilePopup.getValueJobTitle(0)) {
                        this.clickDropDownUser().clickButtonSignOut()
                    }
                })
            })
        }
    }

    clickUploadPhotoButton() {
        basicTest.buttonClicker(this.addPhotoPlusButton);
        return this;
    }

    clickSubmitOnUploadPhotoPopup() {
        basicTest.buttonClicker(this.uploadPhotoPopupSubmitButton);
        return this;
    }

    fileUploaderProfilePicture() {
        var currentDate = new Date();
        if ((currentDate.getSeconds() % 2 == 0) == true) {
            cy.get(this.uploadPhotoPopupChooseFileButton)
                .attachFile("test1.png");
            cy.log(currentDate.getSeconds())
        } else {
            cy.get(this.uploadPhotoPopupChooseFileButton)
                .attachFile("photo.jpg");
            cy.log(currentDate.getSeconds())
        }
    }

    checkWhetherPhotoUploaded() {
        /*
        Temporary decision: checking only whether the popup is closed after uploading
        */
        if (Cypress.$('Upload your profile photo').isDisplayed) {
            throw console.error("The popup is still displayed");
        } else {
            this.clickDropDownUser().clickButtonSignOut();
        }
    }
}
