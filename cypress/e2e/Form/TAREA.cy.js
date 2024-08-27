describe('Enviar mensaje',{testIsolation:false},() =>{

    it('Validar envío de form vacío', () => {
        cy.visit('https://automationintesting.online/')
        cy.log('Envío de form de contacto en blanco...')
        cy.get('#submitContact').click()
        cy.get('.alert').should('be.visible')
    
    cy.fixture('errorMessages.json').then((errors) => {
        errors.emptyFormErrors.forEach((errorMessage) => {
            cy.completP(errorMessage);
        });
    });
    });
    
    it('Validar envío de form con data incorrecta',()=>{
        cy.log('Set de datos incorrectos...')
        cy.WrongInfo();
        cy.get('#submitContact').click()
        cy.get('.alert').should('be.visible')
    
    cy.fixture('errorMessages.json').then((errors) => {
        errors.invalidFormErrors.forEach((errorMessage) => {
            cy.completP(errorMessage);
        });
    });
    });

    it('Validar envío de form con data correcta',()=>{
        cy.log('Set de datos correctos...')
        cy.log('.img-responsive').should('be.visible');
        cy.pause();
        cy.CorrectInfo();
        cy.get('#submitContact').click();
    });

    it('Validar que el mensaje haya sido enviado con éxito por medio de la API', () => {
     cy.intercept('POST', '/message').as('mensajeOk')
     cy.visit('https://automationintesting.online/')
     cy.contains('Name').click
     cy.get('input[placeholder="Name"]').type('Juan Pérez')
     cy.get('input[placeholder="Email"]').type('juan@gmail.com')
     cy.get('input[placeholder="Phone"]').type('35123696457')
     cy.get('input[placeholder="Subject"]').type('Reserva de habitación para fecha X')
     cy.get('[data-testid="ContactDescription"]').type('loremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestlo') 
     cy.get('#submitContact').click()
     cy.wait('@mensajeOk').then(interception => [
        expect(interception.response.status).to.eq(201)
        expect(response.success).to.be.true
     cy.log('mensaje enviado exitosamente')
    ]);
})
})

