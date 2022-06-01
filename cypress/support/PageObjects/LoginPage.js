import { BasicTest } from '../BasicTest'
const basicTest = new BasicTest();
class LoginPage {


     inputEmail = '#email';
     inputPassword = '#password';
     buttonSignUp = '.css-1t999mf > .css-15ry5xc'
     buttonSubmit = '.css-1grsw4x';
     buttonForgotPassword = '.css-jxm41c > .css-15ry5xc';
     

    fillEmail() {
        basicTest.inputFiller(this.inputEmail, Cypress.env('user_email'), { log: false });        
    }

    fillPassword() {
        basicTest.inputFiller(this.inputPassword, Cypress.env('user_password'), { log: false });      
    }

    clickSignUpButton() {
        basicTest.buttonClicker(this.buttonSignUp);
    }

    clickSubmitButton() {
        basicTest.buttonClicker(this.buttonSubmit);
    }

    clickForgotPasswordLink() {
        // !TODO
    }

    fillEmailForRestorePassword() {
        basicTest.inputFiller(this.inputFirstName, Cypress.env('user_email'), { log: false });
    }

    clickResetPasswordButton() {
        // !TODO
    }

    clickDoneButtonOnConfirmationPage(){
        // !TODO
    }

    isOnConfirmationPage(){
        // !TODO
    }    
}
export default LoginPage