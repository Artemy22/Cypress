import { sortAndDeduplicateDiagnostics } from 'typescript';
import LoginPage from '../../support/PageObjects/LoginPage';
import { ProfilePage } from '../../support/PageObjects/ProfilePage'

describe('Basic Steps to avoid dupes', () => {
    const loginPage = new LoginPage;
    const profilePage = new ProfilePage;

    Given('User is logged in to the system', () => {
        cy.visit(Cypress.env('base_url')).contains('Sign in to DFX');
        loginPage.fillEmail().fillPassword().clickSubmitButton();
    })

    When('I unselect first 3 Interests', () => {
        if (profilePage.checkWhetherInterestsChosen) {
            profilePage.clickButtonInterestsSoftwareEngineering().clickButtonInterestsDataScience().clickButtonInterestsCloudEngineering();
        } else throw Error('Interests are still CHOSEN')
    })

    Then('I unselect first 3 Challenges', () => {
        if (profilePage.checkWhetherChallengesChosen()) {
            profilePage.clickButtonChallengesImprovingDiversity().clickButtonChallengesReducingSpend().clickButtonChallengesAttractingTalent();
        } else profilePage.clickButtonChallengesImprovingDiversity().clickButtonChallengesReducingSpend().clickButtonChallengesAttractingTalent();
    })

    Then('I click on the Save button to save my changes', () => {
        profilePage.clickButtonInterestsChallengesSave();
    })

    Then('Interests and Challenges are unselected', () => {
        if (!profilePage.checkWhetherInterestsChosen() && !profilePage.checkWhetherChallengesChosen()) {
            cy.log('INTERESTS AND CHALLANGES ARE UNSELECTED SUCCESSFULLY');
        } else cy.log('!ERROR! \n INTERESTS AND CHALLANGES ARE STILL CHOSEN');
    })

    And('Then Sign out', () => {
        profilePage.clickDropDownUser().clickButtonSignOut();
    })
});
