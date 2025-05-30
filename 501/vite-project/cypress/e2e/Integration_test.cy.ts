/// <reference types="cypress" />


describe ('Integrate webSocket', () => {

const SocketPageUrl = '/public/A01028517/Milestone3/a01784399/Websocket.html';
const MesaageToSend = 'message test';

beforeEach(() => {

    cy.visit(SocketPageUrl, { timeout: 10000 });
    
    // Basic page structure verification
    cy.get('body').should('exist'); // Check if page loaded at all
    cy.get('#Websocket_Div').should('exist').and('not.be.empty'); // Check React root element
    cy.contains('h2', 'Real-Time Notifications').should('exist'); // Verify login form header
  });


  it('should write message and send it', () => {
    cy.get('input[type="text"]').type(MesaageToSend);
    cy.get('button[type="button"]').click();
    cy.get('ul').should('contain', MesaageToSend);
    
    
    
  });







});