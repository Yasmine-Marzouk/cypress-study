/ <reference types="cypress" />
class TodoPage{
	async navigate() {
		await cy.visit('http://todomvc-app-for-testing.surge.sh');
	}

	async addTodo(todoText){
		await cy.get('.new-todo').type(todoText + '{enter}');
	}

	validateTodoText(todoIndex, expectedText){
		cy.get(`.todo-list li:nth-child(${todoIndex+1}) label`).should('have.text', expectedText);
	}
}

module.exports = new TodoPage();

