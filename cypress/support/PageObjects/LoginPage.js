class LoginPage {
    fillEmail() {
        return cy.get('input[name = "email"]').type(Cypress.env('user_email'), { log: false });
    }
    fillPassword() {
        return cy.get('input[name = "password"]').type(Cypress.env('user_password'), { log: false });
    }
    clickSignInButton() {
        return cy.get('button[id="btnLogin"]').click();
    }
    clickForgotPasswordLink() {
        return cy.get('a[href="/forgottenPassword"]').click();
    }
    fillEmailForRestorePassword() {
        return cy.get('input[name = "email"]').type(Cypress.env('user_email'));
    }
    clickResetPasswordButton() {
        return cy.get('button[id="btnReset"]').click();
    }
    clickDoneButtonOnConfirmationPage(){
        return cy.get('button[id="btnConfirm"]').click();
    }
    isOnConfirmationPage(){
        return cy.contains('[class=pagetitle-text]', 'Password reset email sent.');
    }
    isOnLoginPage(){
        return cy.contains('Sign In To e-bate');
    }
}
export default LoginPage