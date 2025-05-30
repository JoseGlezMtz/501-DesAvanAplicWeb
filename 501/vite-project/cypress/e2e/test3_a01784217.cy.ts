/// <reference types="cypress" />

/**
 * Author: Nicole Dávila Hernández
 * 
 * Description: This test checks that the error message remains visible after a failed login and that the password field retains its value.
 */

describe('Login Page - Password Field Behavior', () => {
  const loginPageUrl = '/public/A01028517/Milestone3/A01784217/end2end_tests.html';

  beforeEach(() => {
    cy.visit(loginPageUrl, { timeout: 10000 });
  });

  it('should keep the error message and retain the password after a failed login', () => {
    cy.get('input[name="username"]').type('wronguser');
    cy.get('input[name="password"]').type('wrongpass');
    cy.get('button[type="submit"]').click();
    cy.get('.error').should('contain', 'Credenciales inválidas');
    cy.get('input[name="password"]').should('have.value', 'wrongpass');
  });
});
