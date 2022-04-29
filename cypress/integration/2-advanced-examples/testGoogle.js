/// <reference types="cypress" />

    beforeEach(() => {
      cy.visit('https://tenant2.sbx.e-bate.net/login')
    })
  
    it('.login flow', () => {
  
      cy.get('input[name = "email"]').type('artem.ivanov@e-bate.net').
      get('input[name = "password"]').type('Test1234!').
      get('button[id="btnLogin"]').click();        
    })

    it('.templates', () => {
  
      cy.get('input[name = "email"]').type('artem.ivanov@e-bate.net').type('{enter}').  // нажимаем Ентер
      get('button[id="btnLogin"]').click();
      cy.contains('btn'); // check whether the btn is available or presented
    })