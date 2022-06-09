import { BasicTest } from '../BasicTest'
import { ProfilePage } from './ProfilePage';
const basicTest = new BasicTest();
const profilePage = new ProfilePage();
class LoginPage {


    inputEmail = '#email';
    inputPassword = '#password';
    buttonSignUp = '.css-1t999mf > .css-15ry5xc'
    buttonSubmit = '.css-1grsw4x';
    buttonForgotPassword = '.css-jxm41c > .css-15ry5xc';

    fillEmail() {
        basicTest.inputFiller(this.inputEmail, Cypress.env('user_email'), { log: false });
        return this;
    }

    fillPassword() {
        basicTest.inputFiller(this.inputPassword, Cypress.env('user_password'), { log: false });
        return this;
    }

    fillTemporaryPassword() {
        basicTest.inputFiller(this.inputPassword, Cypress.env('temporaryPassword'), { log: false });
        return this;
    }

    clickSignUpButton() {
        basicTest.buttonClicker(this.buttonSignUp);
        return this;
    }

    clickSubmitButton() {
        basicTest.buttonClicker(this.buttonSubmit);
        return this;
    }

    clickForgotPasswordLink() {
        // !TODO
    }

    fillEmailForRestorePassword() {
        basicTest.inputFiller(this.inputFirstName, Cypress.env('user_email'), { log: false });
        return this;
    }

    clickResetPasswordButton() {
        // !TODO
    }

    clickDoneButtonOnConfirmationPage() {
        // !TODO
    }

    isOnConfirmationPage() {
        // !TODO
    }
}
export default LoginPage