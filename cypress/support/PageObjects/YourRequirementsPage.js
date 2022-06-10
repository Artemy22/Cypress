import { EditProfilePopup } from '../../support/PageObjects/EditProfilePopup'
import { BasicTest } from '../BasicTest';
import { ProfilePage } from './ProfilePage';
const editProfilePopup = new EditProfilePopup;
const basicTest = new BasicTest;
const profilePage = new ProfilePage;
let currentDay = new Date().getDate();
let numberOfRolesToInterview = 5;

export class YourRequirementsPage {

    pageTitle = 'Your Requirements';

    skillMatchSection = {
        engineersDivToCount: '.css-1af4990 > :nth-child(2) > div',
        yourRequestDetailSection: {
            NumberOfRolesRequired: '.css-euu8na > :nth-child(2)',
            numberOfRolesToInterview: '.css-euu8na > :nth-child(4)',
            location: '.css-euu8na > :nth-child(6)',
            startDate: '.css-euu8na > :nth-child(8)',
            duration: '.css-euu8na > :nth-child(10)',
            budgetApproved: '.css-euu8na > :nth-child(12)',
            preferredAttributes: '.css-euu8na > :nth-child(14)',
        },
        textToCheck: 'Thank you for your request. Your Digital Futures Engagement Manager is assembling a proposal for you which will contain detailed information about our engineers that match your requirements',
        buttonCancelRequest: 'Cancel request',
        cancelPopup: {
            textToCheck: 'Cancelling a request will resolve your proposal and will start a brand new request.',
            buttonYes: '.css-8arwz3',
            buttonNo: '.css-1ws88og'
        }
    }

    createRequestStepTitleToCheck = 'To tell us more about your need, create a request. In the request you';
    createRequestPopup = {
        dropDowns: {
            numberOfRolesRequired: '#disciplineRequirements\\.0\\.staff_count',
            numberOfRolesToInterview: '#disciplineRequirements\\.0\\.interview_count',
            location: '#disciplineRequirements\\.0\\.location',
            startDate: '#disciplineRequirements\\.0\\.start_date',
            duration: '#disciplineRequirements\\.0\\.duration',
            budgetApproved: '#disciplineRequirements\\.0\\.budget_status'
        },
        inputPreferredAttributes: '#disciplineRequirements\\.0\\.tech_needs'
    };

    buttons = {
        closeCreateRequestPopup: '.css-1qdk9w9-IconButton',
        restartRequest: 'Restart request',
        createRequest: '.css-8arwz3',
        editRequest: 'Edit request',
        softwareEngineering: 'Software Engineering',
        dataScience: 'Data Science',
        cloudEngineering: 'Cloud Engineering'
    };

    isONYourRequirementsPage() {
        basicTest.isOnPageViaContains(this.pageTitle);
        return this;
    }

    clickDisciplineButtonSoftwareEngineering() {
        basicTest.buttonClickerWithContains(this.buttons.softwareEngineering);
        return this;
    }

    clickDisciplineButtonDataScience() {
        basicTest.buttonClickerWithContains(this.buttons.dataScience);
        return this;
    }

    clickDisciplineButtonCloudEngineering() {
        basicTest.buttonClickerWithContains(this.buttons.cloudEngineering);
        return this;
    }

    clickButtonCreateRequest() {
        basicTest.buttonClicker(this.buttons.createRequest);
        return this;
    }

    clickButtonCancelRequest() {
        basicTest.buttonClickerWithContains(this.skillMatchSection.buttonCancelRequest);
        return this;
    }

    fillOutCreateRequestForm() {
        basicTest
            .dropDownSelector(this.createRequestPopup.dropDowns.numberOfRolesRequired, 1, 3)
            .dropDownSelector(this.createRequestPopup.dropDowns.numberOfRolesToInterview, 3, numberOfRolesToInterview)
            .dropDownSelector(this.createRequestPopup.dropDowns.location, 1, 'London')
            .dropDownSelector(this.createRequestPopup.dropDowns.startDate, 2, '2022-08-' + currentDay)
            .dropDownSelector(this.createRequestPopup.dropDowns.duration, 1, '2 years')
            .dropDownSelector(this.createRequestPopup.dropDowns.budgetApproved, 2, 'in progress');
        return this;
    }

    fillOutPreferredAttributesInput() {
        basicTest.inputFiller(this.createRequestPopup.inputPreferredAttributes, 'QA value');
        return this;
    }

    isOnPageSkillMatch() {
        basicTest.isOnPageViaContains(this.skillMatchSection.textToCheck);
    }

    checkSkillMatchStepOfCreatedRequirements() {
        basicTest.divChildrenCounter(this.skillMatchSection.engineersDivToCount, numberOfRolesToInterview);
    }

    cancelRequest() {
        basicTest
            .buttonClickerWithContains(this.skillMatchSection.buttonCancelRequest)
            .isOnPageViaContains(this.skillMatchSection.cancelPopup.textToCheck)
            .buttonClicker(this.skillMatchSection.cancelPopup.buttonYes)
            .isOnPageViaContains(this.createRequestStepTitleToCheck);
            return this;
    }
}