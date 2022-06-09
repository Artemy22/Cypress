import { EditProfilePopup } from '../../support/PageObjects/EditProfilePopup'
import { BasicTest } from '../BasicTest';
import { ProfilePage } from './ProfilePage';
const editProfilePopup = new EditProfilePopup;
const basicTest = new BasicTest;
const profilePage = new ProfilePage;

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
        }
    }

    createRequestPopup = {
        dropDowns: {
            numberOfRolesRequired: '#disciplineRequirements\.0\.staff_count',
            numberOfRolesToInterview: '#disciplineRequirements\.0\.interview_count',
            location: '#disciplineRequirements\.0\.location',
            startDate: '#disciplineRequirements\.0\.start_date',
            duration: '#disciplineRequirements\.0\.duration',
            budgetApproved: '#disciplineRequirements\.0\.budget_status'
        },
        inputPreferredAttributes: '#disciplineRequirements\.0\.tech_needs'
    };

    buttons = {
        closeCreateRequestPopup: '.css-1qdk9w9-IconButton',
        restartRequest: 'Restart request',
        createRequest: 'Create request',
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
}