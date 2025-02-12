describe('ToDoTest', () => {
 
    it('Create ToDo', () => {
        cy.visit('https://todolist.james.am/#/')

        cy.get('input.new-todo').type('Buy Milk{enter}')

        //check if the new todo is added
        cy.get('ul.todo-list li, Buy Milk').should('be.visible')
        
    })

    it('Delete ToDo', () => {
        cy.visit('https://todolist.james.am/#/')

        cy.get('input.new-todo').type('Delete{enter}')

        cy.contains('ul.todo-list li', 'Delete').find('button.destroy').click({force: true})

        //check if the todo is deleted
        cy.get('ul.todo-list li, Delete').should('not.exist')
    })
    
    it('Edit ToDo', () => {
        cy.visit('https://todolist.james.am/#/')

        cy.get('input.new-todo').type('Edit{enter}')

        cy.contains('ul.todo-list li', 'Edit').dblclick().find('input.edit').clear().type('Edited{enter}')

        //check if the todo is edited
        cy.get('ul.todo-list li, Edited').should('be.visible')
    })
})