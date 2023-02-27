describe('Login Trello', () => {
  it('Login', () => {

    Cypress.on("uncaught:exception", () => {
  
      return false;
    });
    cy.visit('https://trello.com/')

    cy.get('a[href="/login"]').first().click();
    cy.get('#user').type("nithinjoy071993@gmail.com")
    cy.get('#login').click();

    cy.origin('https://id.atlassian.com', () => {

    cy.get('#password').type("Passwordnew/@12345")
    cy.get('#login-submit').click();

  })

  cy.get('[data-testid="create-board-tile"]').click();

  cy.get('[data-testid="create-board-title-input"]').type("SampleBoard")
  cy.get('[data-testid="create-board-submit-button"]').click();

  cy.get('[title="SampleBoard"]').click();
  cy.get('[class="open-add-list js-open-add-list"]').click();
  cy.get('[placeholder="Enter list title…"]').type("List A")
  cy.get('[type="submit"]').click();
  cy.get('[placeholder="Enter list title…"]').type("List B")
  cy.get('[type="submit"]').click();

  cy.get('[class="open-card-composer js-open-card-composer"]').first().click()
  cy.get('[placeholder="Enter a title for this card…"]').type("Test Card");
  cy.get('[value="Add card"]').click();

  cy.wait(10000)

  // const dataTransfer = new DataTransfer();
  // cy.get('[class="list-card-details js-card-details"]').trigger('dragstart',{

  //   dataTransfer
  // })

  // cy.get('[class="card-composer-container js-card-composer-container"]').last().trigger('drop',{

  //   dataTransfer
  // })

   
  cy.get('[class="list-card-details js-card-details"]').drag(':nth-child(2) > .list > .card-composer-container')


  cy.get('.list-card-title')
        .then($target => {
            let coords = $target[0].getBoundingClientRect();
          cy.log(coords)
 })

 cy.get('[data-testid="header-member-menu-button"]').click();

 cy.get('[data-testid="account-menu-logout"]').click()
   
  })


})