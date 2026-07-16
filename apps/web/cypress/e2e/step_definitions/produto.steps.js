const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

Given('que estou autenticado na plataforma',() => {
   cy.login(Cypress.env('email'), Cypress.env('senha'))
})

When('acesso a página de produtos',() => {
  cy.get('a[href="/products"]').click()
  cy.url().should('include','/products')
})

When('busco pelo produto "Polo"',() => {
   cy.get('#search_product').type('Polo')
   cy.get('#submit_search').click()
})

Then('devo visualizar o produto nos resultados',() => {
   cy.contains('h2','Rs. 1500').should('be.visible')
   cy.contains('p','Premium Polo T-Shirts').should('be.visible')
})







