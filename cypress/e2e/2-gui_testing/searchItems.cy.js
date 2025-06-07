describe("Search 1 Item from Fixture on Amazon", () => {

    beforeEach("Navigate to Amazon", () => {
        cy.visit("/");
        cy.fixture("searchItems.json").then((data) => {
            cy.get("#twotabsearchtextbox").clear().type(data.items[0]);
            cy.get("#nav-search-submit-button").click();
            cy.url().then(($url) => {
                expect($url).to.contain("iphone")
                assert.include($url, "iphone")
            })
        });
    });

    it("Search for Iphone 16", () => {
        cy.get("[data-component-type='s-search-results'] div[class='s-no-outline'] h2").first().should('be.visible').scrollIntoView();
        cy.get("[data-component-type='s-search-results'] [class='a-section'] img").should('have.length.greaterThan', 10);
    });
});


describe("Search Every Items from Fixture on Amazon", () => {
    it("Search for Items from fixtures", () => {
        cy.visit("/");

        cy.fixture("searchItems.json").then((data) => {

            data.items.forEach((item) => {
                cy.get("#twotabsearchtextbox").clear().type(item);
                cy.get("#nav-search-submit-button").click();
            });
        });

        cy.get("[data-component-type='s-search-results'] div[class='s-no-outline'] h2").first().should('be.visible').scrollIntoView();
        cy.get("[data-component-type='s-search-results'] [class='a-section'] img").should('have.length.greaterThan', 10);
        cy.go('back');
    });
});