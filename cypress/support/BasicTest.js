import { isAssertionExpression } from "typescript";

export class BasicTest {

    randomName() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return 'QA_' + text;
    }

    inputFiller(element, newValue) {
        cy.get(element).type(newValue)
    }

    buttonClicker(button) {
        cy.get(button).click();
    }
}