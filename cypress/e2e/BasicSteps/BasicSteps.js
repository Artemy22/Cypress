

import { sortAndDeduplicateDiagnostics } from 'typescript';
import  LoginPage from '../../support/PageObjects/LoginPage';
import { ProfilePage } from '../../support/PageObjects/ProfilePage'

describe('Basic Steps to avoid dupes', () => {
    const loginPage = new LoginPage;    
    const profilePage = new ProfilePage;

    Given('User is logged in into the system', () => {
        cy.visit(Cypress.env('base_url'));
        cy.contains('Sign in to DFX');
        loginPage.fillEmail().fillPassword().clickSubmitButton();
    })

    And('Then Sign out', ()=> {
        profilePage.clickDropDownUser().clickButtonSignOut();
    })
});