export class BasicTest {

    randomName() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return 'QA-' + text;
    }

    inputFiller(element, newValue) {
        cy.get(element).type(newValue)
        return this;
    }

    buttonClicker(button) {
        cy.get(button).click({ force: true });
        return this;
    }

    buttonClickerWithContains(containsElement) {
        cy.con(containsElement).click({ force: true });
        return this;
    }

    inputClearer(input) {
        cy.get(input).clear();
        return this;
    }

    fileUploader(chooseFileButton, fileName) {
        cy.get(chooseFileButton)
            .attachFile(fileName);
    }

    checkWhetherInterestsChallengesChosen() {   //infinite number of arguments
        cy.reload().then(() => {
            for (var i = 0; i < arguments.length; i++) {
                return cy.get(arguments[i]).should('have.attr', 'checked')
            }
        })
    }

    checkWhetherInterestsChallengesNotChosen() {         //infinite number of arguments   
        cy.reload().then(() => {
            for (var i = 0; i < arguments.length; i++) {
                return cy.get(arguments[i]).should('not.have.class', 'checked');
            }
        })
    }

    isOnPageViaContains(pageElement) {
        cy.contains(pageElement).should('be.visible')
    }

    dropDownSeelctor(dropDownName, index, value) {
        cy.get(dropDownName).select(index).should('have.value', `${value}`);
        return this;document.querySelector
        //cy.get('select').select('apples').should('have.value', '456')
        //cy.get('select').select(0).should('have.value', '456')
    }

    divChildrenCounter(mainDiv, expectedElementsCount) {
        cy.get(mainDiv).children().should('have.length', expectedElementsCount);
        return this;
    }

    /*  TO REFACTOR
    inputTextGetter(element, indexToReturn) {
        let txt = '';
        cy.get(element).then(($text) => {
            txt = $text.text()
            arrayToCheck.push(txt)
            console.log("ARRAY from BASICTest -> "+arrayToCheck[0])
        })
        return arrayToCheck[indexToReturn];
    }
    */
}