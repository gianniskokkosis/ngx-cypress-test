///<reference types='cypress'/>

describe('Our first suite', () => {

    it("first test", () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        //by tag name
        cy.get('input');

        //by id
        cy.get('#inputEmail1');

        //by class
        cy.get(".input-full-width");

        //by Attribute Name
        cy.get('[placeholder]');

        //by Attribute name and value
        cy.get('[placeholder="Email"]');

        //by class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]');

        //by tagname and Attribute with value
        cy.get('input[placeholder="Email"]');

        //by two different attributes
        cy.get('[placeholder="Email"][type="email"]');

        //by tag name, Attribute with value, Id and class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        //The most recommended way by cypress
        cy.get('[data-cy="imputEmail1"]')
    });

    it('second test', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        cy.get('[data-cy="signIn"]');
        cy.contains('Sign in');

        cy.contains('[status="warning"]', 'Sign in');

        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click();

        cy.contains('nb-card', 'Horizontal form').find('[type="email"]');
    });
});