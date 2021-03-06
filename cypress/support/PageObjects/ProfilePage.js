import { EditProfilePopup } from '../../support/PageObjects/EditProfilePopup'
import { BasicTest } from '../BasicTest';
const editProfilePopup = new EditProfilePopup;
const basicTest = new BasicTest;
let startDate = '';


export class ProfilePage {
    locatorDropDownUser = '.css-b4y3aj';
    locatorYourRequirements = 'Your requirements';
    locatorAccountSettings = 'Account settings';
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
    uploadPhotoPopupSubmitButton = '[class="css-8arwz3"]';

    /*INTERESTS SECTION*/
    divInterests = ':nth-child(1) > .css-khnrw0';
    buttonInterestsSoftwareEngineering = '#profile-interest-0';
    buttonInterestsDataScience = '#profile-interest-1';
    buttonInterestsCloudEngineering = '#profile-interest-2';

    /*CHALLENGES SECTION*/
    divChallenges = ':nth-child(3) > .css-khnrw0';
    buttonChallengesImprovingDiversity = '#profile-challenge-0';
    buttonChallengesReducingSpend = '#profile-challenge-1';
    buttonChallengesAttractingTalent = '#profile-challenge-2';

    buttonInterestsChallengesSave = '.css-1x4nq2r';

    /* CURRENT VALUES */
    _valueFirstName;
    _valueLastName;
    _valueJobTitle;
    _valueCompany;
    _valueLocation;
    _locationPhoneNumber;

    clickOnYourRequirementsMainHeader() {
        basicTest.buttonClickerWithContains(this.locatorYourRequirements);
    }

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

    clickUSerDropDownAccountSettings() {
        cy.contains(this.locatorAccountSettings).click();
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
        var currentDate = new Date();
        startDate = currentDate.getTime();
        return this;
    }

    fileUploaderProfilePicture() {
        var currentDate = new Date();
        if ((currentDate.getSeconds() % 2 == 0) == true) {
            basicTest.fileUploader(this.uploadPhotoPopupChooseFileButton, "test1.png")
        } else {
            basicTest.fileUploader(this.uploadPhotoPopupChooseFileButton, "photo.jpg")
        }
    }

    checkWhetherPhotoUploaded() {
        /*
        Temporary decision: checking only whether the popup is closed after uploading
        */
        if (Cypress.$('Upload your profile photo').isDisplayed) {
            throw console.error("The popup is still displayed");
        } else {
            var currentDate = new Date();
            cy.log("Picture uploading took about: " + (currentDate.getTime() - startDate) / 1000 + "s");
            this.clickDropDownUser().clickButtonSignOut();
        }
    }

    checkWhetherProfilePageLoaded() {
        cy.contains('Your profile').should('be.visible');
        return this;
    }

    clickButtonInterestsSoftwareEngineering() {
        this.checkWhetherProfilePageLoaded();
        basicTest.buttonClicker(this.buttonInterestsSoftwareEngineering);
        return this;
    }


    clickButtonInterestsDataScience() {
        this.checkWhetherProfilePageLoaded();
        basicTest.buttonClicker(this.buttonInterestsDataScience);
        return this;
    }

    clickButtonInterestsCloudEngineering() {
        this.checkWhetherProfilePageLoaded();
        basicTest.buttonClicker(this.buttonInterestsCloudEngineering);
        return this;
    }


    clickButtonChallengesImprovingDiversity() {
        this.checkWhetherProfilePageLoaded();
        basicTest.buttonClicker(this.buttonChallengesImprovingDiversity);
        return this;
    }


    clickButtonChallengesReducingSpend() {
        this.checkWhetherProfilePageLoaded();
        basicTest.buttonClicker(this.buttonChallengesReducingSpend);
        return this;
    }

    clickButtonChallengesAttractingTalent() {
        this.checkWhetherProfilePageLoaded();
        basicTest.buttonClicker(this.buttonChallengesAttractingTalent);
        return this;
    }

    clickButtonInterestsChallengesSave() {
        basicTest.buttonClicker(this.buttonInterestsChallengesSave);
        return this;
    }

    checkWhetherInterestsChosen() {
        cy.get(this.divInterests).should('be.visible')
        return basicTest.checkWhetherInterestsChallengesChosen(
            this.buttonInterestsCloudEngineering,
            this.buttonInterestsSoftwareEngineering,
            this.buttonInterestsDataScience)
    }

    checkWhetherChallengesChosen() {
        this.checkWhetherProfilePageLoaded();
        return basicTest.checkWhetherInterestsChallengesChosen(
            this.buttonChallengesAttractingTalent,
            this.buttonChallengesImprovingDiversity,
            this.buttonChallengesReducingSpend)
    }

    checkWhetherInterestsNotChosen() {
        this.checkWhetherProfilePageLoaded();
        return basicTest.checkWhetherInterestsChallengesNotChosen(
            this.buttonInterestsCloudEngineering,
            this.buttonInterestsSoftwareEngineering,
            this.buttonInterestsDataScience);
    }

    checkWhetherChallengesNotChosen() {
        this.checkWhetherProfilePageLoaded();
        return basicTest.checkWhetherInterestsChallengesNotChosen(
            this.buttonChallengesAttractingTalent,
            this.buttonChallengesImprovingDiversity,
            this.buttonChallengesReducingSpend)
    }

    signOut() {
        this.clickDropDownUser().clickButtonSignOut();
        return this;
    }
}