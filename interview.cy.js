/// <reference types="cypress" />


describe("Test happy path for checkout flow", () => {
    beforeEach(() => {
      cy.visit("https://on:trend@staging-beta.on-running.com/");
    });
  
    it("displays a list of categories by default", () => {
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
        cy.get(".card-visual-box").first().click()
          .get(".purchase-pod__title").should(
          "have.text",
          "\n            Cloud Monochrome\n          "
        );
        cy.get(".purchase-pod__color").should("have.text", "Dijon")
          .get(".sizes__wrapper")
          .find('.sizes__size:contains("46")')
          .first()
          .click();
        cy.get(".button-container > .button").click() //Add to cart button
          .get(".button__inner")   //Checkout
              .contains("Checkout")
              .click({force: true});
      
        
            // Registration")
         cy.get(".registration__title-guest").should("contains.text","Enter your Email address"); 
         //cy.wait(500)   
         cy.get("#email").type("akkin.shailaja@gmail.com");
         cy.contains("button","Continue to Shipping").click();
         

         // Shipping details
         cy.get(".shipping__title").should("contains.text","Shipping")
            .get("#firstname").type("Shailaja")
            .get("#lastname").type("A")
            .get("#address1").type("Otto-Braun Strasse")
            .get("#zipcode").type("10178")
            .get("#city").type("Berlin")
            .get("#phone").type("15162492195")
            cy.contains("button","Show Shipping Options").click();
            cy.wait(500) 
            cy.contains("button","Continue to Payment").click();

        // Payments
        // cy.get(".payment__title").should("contains.text","Payment")

        // cy.get(".adyen-checkout__payment-method--klarna > .adyen-checkout__payment-method__header > .adyen-checkout__payment-method__header__title > .adyen-checkout__payment-method__radio").click();
        cy.get(".adyen-checkout__payment-method__radio").last().click();
        cy.contains("button","Continue to PayPal").click();
        // cy.get(".payment-bootstrap-layout__title").should("contains.text","Complete your purchase")
          
          //cy.contains("button","Buy").click();
          cy.get("#buy-button").click()
        });   
       
    });
  });
  