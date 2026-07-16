describe("Acesso à página de login", () => {
 
  it("deve direcionar o usuário para a página de login", () => {
      
     cy.login(Cypress.env('email'), Cypress.env('senha'))
   
     cy.contains('Logged in as Koyama QA').should('be.visible')

  })
})