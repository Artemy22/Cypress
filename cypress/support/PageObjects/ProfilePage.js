import { EditProfilePopup } from '../../support/PageObjects/EditProfilePopup'
const editProfilePopup = new EditProfilePopup;

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
        cy.get(this.dropDownUser).click();
        return this;
    }
    clickButtonSubit() {
        cy.get(this.buttonSignOut).click();
        return this;
    }
    clickButtonEditProfile() {
        cy.get(this.buttonEditProfile).click();
        return this;
    }
    checkWhetherUpdated() {
        if (editProfilePopup.checkWhetherPopupClosed() == true) {

            cy.reload().then(() => {                
                cy.get('.css-xmmubi > :nth-child(3) > :nth-child(2)').then(($text) => { // this works!
                    const txt = $text.text()
                    cy.log(txt)
                })
                cy.log("EDITOR PAGE: " + editProfilePopup.valueJobTitle)
            })
        } else throw 'Is not closed'
        return this;
    }
}