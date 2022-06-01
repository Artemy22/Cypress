import { BasicTest } from '../BasicTest'
const basicTest = new BasicTest();

class CreateAccountPage {


    inputFirstName = '#firstName'
    inputLastName = '#lastName';
    inputEmailAddress = '#email';
    inputCreatePassword = '#password';
    inputRepeatPassword = '#repeatPassword';
    buttonSubmit = 'Submit';
    buttonSignIn = '.css-15ry5xc';
    buttonAcceptCookies = '.css-zls1bi';
    buttonSignUpOnVerificationPage = 'Sign up with a'


    checkWhetherCookiesButtonPresented() {
        if (cy.contains("Accept")) {
            cy.get(this.buttonAcceptCookies).click();
            return this
        } else return this
    }

    fillFirstName() {
        basicTest.inputFiller(this.inputFirstName, 'new_'+basicTest.randomName());
        return this
    }

    fillLastName() {
        basicTest.inputFiller(this.inputLastName, 'new_'+basicTest.randomName());
        return this
    }

    fillEmailAddress() {
        basicTest.inputFiller(this.inputEmailAddress, basicTest.randomName() + '@evolve-consultants.co.uk');
        return this
    }

    fillCreatePassword() {
        basicTest.inputFiller(this.inputCreatePassword, '!1q2w3e4r%T');
        return this
    }

    fillRepeatPassword() {
        basicTest.inputFiller(this.inputRepeatPassword, '!1q2w3e4r%T');
        return this
    }

    clickbuttonSubmit() {
        cy.contains(this.buttonSubmit).click();
        return this
    }

    isOnConfirmationPage() {
        return cy.contains("If you didn't receive a verification email please click here");
    }

    ClickSignUpWithADifferentEmail() {
        basicTest.buttonClicker(this.buttonSignUpOnVerificationPage);
        return this
    }

    PreparationToTheNextRun() {
        if (cy.contains(this.buttonSignUpOnVerificationPage)) {
            return cy.contains(this.buttonSignUpOnVerificationPage).click();
        } else return this;
    }
}
export default CreateAccountPage