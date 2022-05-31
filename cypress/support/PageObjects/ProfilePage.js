class ProfilePage {
    dropDownUser = '.css-b4y3aj';
    buttonSignOut = '[href="/sign-out"]';

    clickDropDownUser(){
        cy.get(this.dropDownUser).click()
        return this;
    }
    clickButtonSubit(){
        cy.get(this.buttonSignOut).click()
        return this;
    }
}

export default ProfilePage