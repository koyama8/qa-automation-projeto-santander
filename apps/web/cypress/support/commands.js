Cypress.Commands.add('login', (email, senha) => {
  cy.visit('/login')

  cy.get('[data-qa="login-email"]').type(email)
  cy.get('[data-qa="login-password"]').type(senha, { log: false })
  cy.get('[data-qa="login-button"]').click()

  cy.contains('Logged in as').should('be.visible')
  cy.get('a[href="/logout"]').should('be.visible')
})
