describe('ToDo tests', () => {
  it('ToDo tests', () => {
    cy.visit('https://todolist.james.am/#/')

    //3.1. Ar <header> elementas atvaizduojamas.
    cy.get('header').should('be.visible')

    //3.2. Ar headeryje atvaizduojamas tekstas "To Do List"
    cy.get('header').should('contain.text', 'To Do List')

    //3.3. Ar atvaizduojamas 'Double-click to edit a todo' tekstas
    cy.get('footer').should('contain.text', 'Double-click to edit a toodo')

    //3.4 Ar input laukelyje atvaizduojamas tekstas 'What need's to be done?'
    cy.get('.new-todo').should('have.attr', 'placeholder', 'What need\'s to be done?')

    //3.5. Ar pridėjus kelias užduotis, užduočių sąrašas nėra tuščias//
    cy.get('.new-todo').type('Pirmas darbas{enter}')
    cy.get('.new-todo').type('Antras darbas{enter}')
    cy.get('.todo-list').should('not.be.empty')
    
  })
})