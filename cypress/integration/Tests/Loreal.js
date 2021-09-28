describe('Loreal Web functionality', () => {
    it('login', () => {
        cy.visit('https://www.lorealprofessionnel.in/');
        cy.get("span[class='icon i-search']").click();
        cy.get('input[placeholder="Search"]').type("Inoa No Ammonia{enter}");
        cy.get('a[href="/hair-colour/permanent-and-ammonia-free"]> div > h2').click();
        // cy.get('.range-name').should('have.text',"No Ammonia. Permanent.");
        // cy.get('.product-name').should('have.text',"Inoa..");
        // cy.get('.product-name').scrollIntoView().click();
    })
});