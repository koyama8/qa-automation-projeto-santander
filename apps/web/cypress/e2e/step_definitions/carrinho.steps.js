const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('que estou autenticado para realizar uma compra', () => {
  cy.login(Cypress.env('email'), Cypress.env('senha'))
})

When('localizo o produto "Premium Polo T-Shirts"', () => {
  cy.get('a[href="/products"]').first().click()
  cy.url().should('include', '/products')

  cy.get('#search_product').clear().type('Premium Polo T-Shirts')
  cy.get('#submit_search').click()
})

When('clico em adicionar o produto ao carrinho', () => {
  cy.contains('.product-image-wrapper', 'Premium Polo T-Shirts')
    .find('.add-to-cart')
    .first()
    .click()
})

Then('devo visualizar a confirmação de produto adicionado ao carrinho', () => {
  cy.get('.modal-confirm').within(() => {
    cy.contains('h4', 'Added!').should('be.visible')
    cy.contains('p', 'Your product has been added to cart.').should(
      'be.visible',
    )
  })
})
