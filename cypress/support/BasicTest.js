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
        cy.get(button).click();
        return this;

    }

    inputClearer(input) {
        cy.get(input).clear();
        return this;
    }
}