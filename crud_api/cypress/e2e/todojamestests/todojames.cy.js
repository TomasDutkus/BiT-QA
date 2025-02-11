describe('ToDoTest', () => {
 
    it('Create new ToDo', () => {
        cy.visit('https://todolist.james.am/#/')

        cy.get('input.new-todo').type('Buy Milk{enter}')
    })
})