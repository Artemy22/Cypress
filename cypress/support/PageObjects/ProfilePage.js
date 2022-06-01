class ProfilePage {
    dropDownUser = '.css-b4y3aj';
    buttonSignOut = '[href="/sign-out"]';

    buttonEditProfile = '.css-59wuf6';



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