/// <reference types="cypress" />

describe("Verify basics of amazon.in", () => {

    before("Navigate to Page", () => {
        cy.visit("/");
    })
    it("verify title of amazon.in", () => {

        cy.title().should('eq', 'Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
        cy.url().should('include', 'in');
    });

    it("Verify searchBar is present", () => {
        cy.visit("/");
        cy.get("#twotabsearchtextbox").should('be.visible')
        cy.get("#twotabsearchtextbox").type("Iphone");
        cy.get("#twotabsearchtextbox").should('have.value', "Iphone");
        cy.get(".two-pane-results-container>div>div").should('have.length', 10);
        cy.get(".two-pane-results-container").find("[class*='s-suggestion-container']").should('have.length', 10);
        cy.get("[id*='sac-suggestion-row'] div[id*='cell-1'] div[role=button]").eq(0).should('contain.text', 'iphone')
        cy.get("[id*='sac-suggestion-row'] div[id*='cell-1'] div[role=button]").then(($el) =>
            cy.wrap($el).should('contain.text', 'iphone'))

    })

    it.only("Search Iphone 16", () => {
        cy.visit("/");
        cy.get("#twotabsearchtextbox").clear();
        cy.get("#twotabsearchtextbox").type("iphone 16");
        // cy.get("[id*='sac-suggestion-row'] div[id*='cell-1'] div[role=button]")
        //     .should('exist')
        //     .filter((index, el) => el.innerText.toLowerCase().includes('iphone'))
        //     .first().as('firstSuggestion')
        // cy.get('@firstSuggestion').should('contain.text', 'iphone 16').and('exist').and('be.visible');
        // cy.pause();
        // cy.get('@firstSuggestion').click();

        cy.xpath("//*[@id='nav-search-submit-button']").click();

    });
})