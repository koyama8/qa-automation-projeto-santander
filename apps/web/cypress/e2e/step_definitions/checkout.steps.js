const {
  Given,
  When,
  Then,
} = require('@badeball/cypress-cucumber-preprocessor')

Given('que possuo o produto "Premium Polo T-Shirts" no carrinho', () => {
  cy.login(Cypress.env('email'), Cypress.env('senha'))

  cy.visit('/view_cart')

  cy.get('body').then(($body) => {
    const produtoNoCarrinho = $body
      .find('#cart_info tbody tr')
      .filter((_, linha) =>
        Cypress.$(linha).text().includes('Premium Polo T-Shirts')
      )

    if (produtoNoCarrinho.length > 0) {
      cy.wrap(produtoNoCarrinho.first())
        .find('.cart_quantity_delete')
        .click()
    }
  })

  cy.get('a[href="/products"]').first().click()
  cy.url().should('include', '/products')

  cy.get('#search_product').clear().type('Premium Polo T-Shirts')
  cy.get('#submit_search').click()

  cy.contains('.product-image-wrapper', 'Premium Polo T-Shirts')
    .find('.add-to-cart')
    .first()
    .click()

  cy.get('.modal-content').within(() => {
    cy.contains('a', 'View Cart').click()
  })

  cy.url().should('include', '/view_cart')
})

When('avanço para o checkout', () => {
  cy.contains('a', 'Proceed To Checkout').click()
  cy.url().should('include', '/checkout')
})

When('valido o produto "Premium Polo T-Shirts" no resumo do pedido e prossigo para o pagamento',() => {
    cy.contains('#cart_info tbody tr', 'Premium Polo T-Shirts')
      .should('be.visible')
      .within(() => {
        cy.get('.cart_product img')
          .should('be.visible')
          .and('have.attr', 'alt', 'Product Image')

        cy.get('.cart_description').within(() => {
          cy.contains('h4', 'Premium Polo T-Shirts').should('be.visible')
          cy.contains('p', 'Men > Tshirts').should('be.visible')
        })

        cy.get('.cart_price').should('contain', 'Rs. 1500')
        cy.get('.cart_quantity').should('contain', '1')
        cy.get('.cart_total').should('contain', 'Rs. 1500')
      })

    cy.contains('#cart_info tbody tr', 'Total Amount')
      .should('be.visible')
      .within(() => {
        cy.get('.cart_total_price').should('contain', 'Rs. 1500')
      })

    cy.contains('a', 'Place Order').click()
  }
)

Then('devo visualizar a tela de pagamento', () => {
  cy.url().should('include', '/payment')
  cy.contains('h2', 'Payment').should('be.visible')

  cy.get('[data-qa="name-on-card"]').should('be.visible')
  cy.get('[data-qa="card-number"]').should('be.visible')
  cy.get('[data-qa="cvc"]').should('be.visible')
  cy.get('[data-qa="expiry-month"]').should('be.visible')
  cy.get('[data-qa="expiry-year"]').should('be.visible')
  cy.get('[data-qa="pay-button"]').should('be.visible')
})
