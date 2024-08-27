Cypress.Commands.add('completeName', (name, apellido) => { 
    cy.getComputedStyle('#firstName').type(name)
    cy.get('#lastName').type(apellido)
})