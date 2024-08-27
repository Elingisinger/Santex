
    describe('Test de formulario',() => {
        it('Visitar pagina', ()=>{
          cy.visit('http://demoqa.com');

          cy.get('h5').contains('Element').click()
          cy.get('span').contains('Forms').click()
          cy.get('span')contains('Practice Form').click()

          cy.completeName('Juan', 'Perez')
        });
      });