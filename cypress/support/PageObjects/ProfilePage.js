import { EditProfilePopup } from '../../support/PageObjects/EditProfilePopup'
import { BasicTest } from '../BasicTest';
const editProfilePopup = new EditProfilePopup;
const basicTest = new BasicTest;

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
}
