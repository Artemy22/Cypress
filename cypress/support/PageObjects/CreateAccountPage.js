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
        cy.get(this.inputFirstName).type(basicTest.randomName()), { log: false };
        return this;
    }

    fillLastName() {
        cy.get(this.inputLastName).type(basicTest.randomName()), { log: false };
        return this;
    }

    fillEmailAddress() {
        cy.get(this.inputEmailAddress).type(basicTest.randomName() + '@evolve-consultants.co.uk'), { log: false };
        return this;
    }

    fillCreatePassword() {
        cy.get(this.inputCreatePassword).type('1q2w3epassW@!'), { log: false };
        return this;
    }

    fillRepeatPassword() {
        cy.get(this.inputRepeatPassword).type('1q2w3epassW@!'), { log: false };
        return this;
    }

    clickbuttonSubmit() {
        return cy.contains(this.buttonSubmit).click();
    }

    isOnConfirmationPage() {
        return cy.contains("If you didn't receive a verification email please click here");
    }

    ClickSignUpWithADifferentEmail() {
        return cy.contains(this.buttonSignUpOnVerificationPage).click();
    }

    PreparationToTheNextRun() {
        if (cy.contains(this.buttonSignUpOnVerificationPage)) {
            return cy.contains(this.buttonSignUpOnVerificationPage).click();
        } else return this;
    }
}
export default CreateAccountPage