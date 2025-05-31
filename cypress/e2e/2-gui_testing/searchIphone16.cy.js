describe("Search Iphone 16 on Amazon", () => {
    beforeEach("Navigate to Amazon", () => {
        cy.visit("https://www.amazon.in/");
        cy.get("#twotabsearchtextbox").clear().type("iphone 16");
        cy.get("#nav-search-submit-button").click();
        cy.url().then(($url) => {
            expect($url).to.contain("iphone")
            assert.include($url, "iphone")
        })
    });

    it("Search for Iphone 16", () => {
        cy.get("[data-component-type='s-search-results'] div[class='s-no-outline'] h2").first().should('be.visible').scrollIntoView();
        cy.get("[data-component-type='s-search-results'] [class='a-section'] img").should('have.length.greaterThan', 10);
        //   cy.screenshot("Iphone 16 Result page");
    });

    it("Find iphone with cheapest rate", () => {
        const cheapest = 0;
        // cy.get("[role='listitem'] [data-cy='price-recipe'] [data-a-color='base'] .a-offscreen").should('exist');
        cy.url().then(($url) => {
            expect($url).to.contain("iphone")
            assert.include($url, "iphone")
        })
    })

});