/// <reference types="Cypress" />
import TodoPage from '../PageObjects/todo-page.js'
context('MyTests', () =>{
	describe('1st test', function () {
		beforeEach(()=>{
			// cy.visit('http://todomvc-app-for-testing.surge.sh');
			// cy.get('.new-todo', {timeout: 6000}).type('clean room{enter}');
			TodoPage.navigate();
			TodoPage.addTodo('clean room');
			}
		)
		// it("Navigate to MVC Todo", () => {
		// 	cy.visit('http://todomvc-app-for-testing.surge.sh');
		// })
		// it("Should be able to add new todo item", () =>{
		// 	cy.visit('http://todomvc-app-for-testing.surge.sh');
		// 	cy.get('.new-todo', {timeout: 6000}).type('clean room{enter}');
		// 	cy.get('label').should('have.text', 'clean room');
		// 	cy.get('.toggle').should('not.be.checked');
		// 	cy.get('.toggle').click();
		// 	cy.get('label').should('have.css', 'text-decoration-line', 'line-through');
		// 	cy.contains('Clear completed').click();
		// 	cy.get('.new-todo').should('not.have.descendants', 'li');
		//
		// })
		//
		it('Should be able to add new todo list', () => {
			// cy.get('.new-todo', {timeout: 6000}).type('clean room{enter}');
			// cy.get('label').should('have.text', 'clean room');
			TodoPage.validateTodoText(0, 'clean room');
			cy.get('.toggle').should('not.be.checked');
		})
		it('Mark the todo list as checked', () => {
			cy.get('.toggle').click();
			cy.get('label').should('have.css', 'text-decoration-line', 'line-through');
		})
		it('Should be able to add new todo list', () => {
			cy.get('.toggle').click();
			cy.contains('Clear completed').click();
			cy.get('.new-todo').should('not.have.descendants', 'li');
		})
	});
})
