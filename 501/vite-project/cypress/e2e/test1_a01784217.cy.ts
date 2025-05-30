/// <reference types="cypress" />

/**
 * Author: Nicole Dávila Hernández
 * 
 * Description: This tests the masking of the password input field in the login form.
 */

describe('Login Page - Additional Tests', () => {
  const loginPageUrl = '/public/A01028517/Milestone3/A01784217/end2end_tests.html';

  beforeEach(() => {
    cy.visit(loginPageUrl, { timeout: 10000 });
  });

  it('should have a password input of type password (masked)', () => {
    cy.get('input[name="password"]').should('have.attr', 'type', 'password');
  });
});
