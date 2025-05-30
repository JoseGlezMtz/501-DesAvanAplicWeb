/// <reference types="cypress" />

/**
 * Author: Nicole Dávila Hernández
 * 
 * Description: This test checks that the error message doesn't disappear when the user starts typing after a failed login attempt.
 */

describe('Login Page - Error Message Behavior', () => {
  const loginPageUrl = '/public/A01028517/Milestone3/A01784217/end2end_tests.html';

  beforeEach(() => {
    cy.visit(loginPageUrl, { timeout: 10000 });
  });

  it('should keep error message when user starts typing after failed login', () => {
    // Trigger error
    cy.get('input[name="username"]').type('wronguser');
    cy.get('input[name="password"]').type('wrongpass');
    cy.get('button[type="submit"]').click();
    cy.get('.error').should('contain', 'Credenciales inválidas');

    // Start typing, error should remain
    cy.get('input[name="username"]').clear().type('a');
    cy.get('.error').should('exist');
  });
});
