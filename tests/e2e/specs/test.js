// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

//   Do the number buttons update the display of the running total?
  it('should update the display of the running total on button press', () => {
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '23')
  })

// Do the arithmetical operations update the display with the result of the operation?
it('should update the display of the running total after arithmetical operation', () => {
  cy.get('#number2').click();
  cy.get('#operator_add').click();
  cy.get('#number3').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '5')
})

// Can multiple operations be chained together?
it('should update the display of the running total with multiple arithmetical operations', () => {
  cy.get('#number2').click(); // 2
  cy.get('#operator_add').click(); // +
  cy.get('#number3').click();  // 3
  cy.get('#operator_equals').click();// runningTotal = 5
  cy.get('#operator_multiply').click() // *
  cy.get('#number8').click(); // 8
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '40')
})


// Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?


// What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).
})
