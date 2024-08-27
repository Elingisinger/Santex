// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --

//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add('completP', (paragraph) => {
    cy.get('p').contains(paragraph)
});

Cypress.Commands.add('fillForm', (formData) => {
});

Cypress.Commands.add('CorrectInfo', () => {
    cy.fillForm({
      'Name':'Juan Pérez',
      'Email':'juan@gmail.com',
      'Phone':'35123696457',
      'Subject':'Reserva de habitación para fecha X',
      'data-testid="ContactDescription' : 'loremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestlo',
    });
});

Cypress.Commands.add('WrongInfo', () => {
    cy.fillForm({
      'Name':'asd',
      'Email':'asdasd',
      'Phone':'asdasd',
      'Subject':'asdasd',
      'data-testid="ContactDescription' : 'asdasd',
    });
});

//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

