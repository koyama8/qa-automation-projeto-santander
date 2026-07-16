Cypress.Commands.add("login", (email, senha) => {
  cy.visit("/login");

  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(senha, { log: false });
  cy.get('[data-qa="login-button"]').click();
});
