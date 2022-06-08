import LoginPage from '../../support/PageObjects/LoginPage';
import { ProfilePage } from '../../support/PageObjects/ProfilePage'

describe('Unselect Interests and Challenges', () => {
    const loginPage = new LoginPage;
    const profilePage = new ProfilePage;

    Given('User is logged in to the system', () => {
        cy.visit(Cypress.env('base_url')).contains('Sign in to DFX');
        loginPage.fillEmail().fillPassword().clickSubmitButton();
        cy.contains('Your profile').should('be.visible')
    })

    When('I unselect first 3 Interests', () => {
        if (profilePage.checkWhetherInterestsChosen) {
            profilePage.clickButtonInterestsSoftwareEngineering().clickButtonInterestsDataScience().clickButtonInterestsCloudEngineering();
        } else throw Error('Interests are still CHOSEN')
    })

    Then('I click on the Save button to save my changes', () => {
        profilePage.clickButtonInterestsChallengesSave();
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
        profilePage.checkWhetherInterestsNotChosen();
        profilePage.checkWhetherChallengesNotChosen()
    })

    And('Then Sign out', () => {
        profilePage.clickDropDownUser().clickButtonSignOut();
    })
});
