/// <reference types="Cypress" />
context('MyTests', () => {
	describe('filtering', ()=>{
		beforeEach(()=>{
			cy.visit('http://todomvc-app-for-testing.surge.sh');
			cy.get('.new-todo').type('clean room{enter}');
			cy.get('.new-todo').type('Learn Javascript{enter}');
			cy.get('.new-todo').type('Use Cypress{enter}');
			cy.get('.todo-list li:nth-child(2) .toggle').click();
		})
		it('Check filtering by "Active"', () =>{
			cy.contains('Active').click();
			cy.get('.todo-list').should('have.descendants', 'li', 2);
		})
	})
})