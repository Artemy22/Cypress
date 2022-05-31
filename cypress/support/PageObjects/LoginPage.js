class LoginPage {


     inputEmail = '#email';
     inputPassword = '#password';
     buttonSignUp = '.css-1t999mf > .css-15ry5xc'
     buttonSubmit = '.css-1grsw4x';
     buttonForgotPassword = '.css-jxm41c > .css-15ry5xc';
     

    fillEmail() {
        return cy.get(this.inputEmail).type(Cypress.env('user_email'), { log: false });
    }
    fillPassword() {
        return cy.get(this.inputPassword).type(Cypress.env('user_password'), { log: false });
    }
    clickSignUpButton() {
        return cy.get(this.buttonSignUp).click();
    }
    clickSubmitButton() {
        return cy.get(this.buttonSubmit).click();
    }
    clickForgotPasswordLink() {
        return cy.get().click();
    }
    fillEmailForRestorePassword() {
        return cy.get().type(Cypress.env('user_email'));
    }
    clickResetPasswordButton() {
        return cy.get().click();
    }
    clickDoneButtonOnConfirmationPage(){
        return cy.get().click();
    }
    isOnConfirmationPage(){
        return cy.contains();
    }    
}
export default LoginPage