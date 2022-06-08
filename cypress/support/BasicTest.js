import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';
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
    /*
    console.log(cy.get(arguments[i]).invoke('attr', 'checked')
    .should('not.exist'));
    return cy.get(arguments[i]).invoke('attr', 'checked')
        .should('not.exist')

    cy.get('#header a').should('have.attr', 'href')
    cy.get('input').invoke('attr', 'placeholder').should('contain', 'username')
    cy.wrap({ foo: 'bar' }).its('foo').should('eq', 'bar') // Assert the 'foo' property equals 'bar'
    cy.get(arguments[i]).should('have.attr', 'checked').catch((err) => {
        return false;
    })*/




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