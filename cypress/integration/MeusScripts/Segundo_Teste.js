describe('Meu Segundo Teste', () => {
    it('Run Login Linkedin', () => {
        cy.visit('http://4alltests.com.br/');
        cy.get('#header').click();
        cy.get('ul:nth-child(1) > li:nth-child(4) > a').click();
        cy.url().should('contains', 'http://4alltests.com.br/vagas');        
    })
})