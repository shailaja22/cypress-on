/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("Test happy path for checkout flow", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    //The username and password need to be updated before running
    cy.visit("https://<username>:<password>@staging-beta.on-running.com/");
  });

  it("displays a list of categories by default", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get(".category-card")
      .should("have.length", 10)
      .first()
      .should("have.text", " Cloud Collection");
  });

  it("select the 'Cloud Collection' and verify there are 85 shoes", () => {
    cy.get(".category-card")
      .contains(" Cloud Collection")
      .click({ force: true });
    cy.get(".title-box__title").should("have.text", "Cloud");
    cy.get(".card-visual-box").should("be.have.length.gt", 80);
    describe("Select a shoe and checkout", () => {
      cy.get(".card-visual-box").first().click();
      cy.get(".purchase-pod__title").should(
        "have.text",
        "\n            Cloud Monochrome\n          "
      );
      cy.get(".purchase-pod__color").should("have.text", "Dijon");
      cy.get(".sizes__wrapper")
        .find('.sizes__size:contains("46")')
        .first()
        .click();
      cy.get(".button-container > .button").click(); //Add to cart button
      //Removes the item from the cart so that testcase can be run many times
      cy.get(".order-item-block__remove").click();
    });
  });
});
