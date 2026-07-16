const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

Given('que possuo credenciais válidas',() => {
    expect(Cypress.env('email')).and.not.be.empty
    expect(Cypress.env('senha')).and.not.be.empty
})

When('realizo o login na plataforma',() => {
    cy.login(Cypress.env('email'), Cypress.env('senha'))
})

Then('devo visualizar o usuário autenticado',() => {
     cy.contains('Logged in as Koyama QA').should('be.visible')
})
