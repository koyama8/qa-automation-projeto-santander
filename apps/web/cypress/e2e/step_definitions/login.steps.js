const {
  Given,
  When,
  Then,
} = require('@badeball/cypress-cucumber-preprocessor')

Given('que possuo credenciais válidas', () => {
  if (!Cypress.env('email') || !Cypress.env('senha')) {
    throw new Error(
      'Configure email e senha no arquivo apps/web/cypress.env.json'
    )
  }
})

When('realizo o login na plataforma', () => {
  cy.login(Cypress.env('email'), Cypress.env('senha'))
})

Then('devo visualizar o usuário autenticado', () => {
  cy.contains('Logged in as').should('be.visible')
  cy.get('a[href="/logout"]').should('be.visible')
})
