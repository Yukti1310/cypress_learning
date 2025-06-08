import { homePage as home } from "../pages/homePage";
import { searchResultPage as resultPage } from "../pages/searchResultPage";
describe("Search Iphone 16 on Amazon", () => {
    beforeEach("Navigate to Amazon", () => {
        cy.visit("/");
        home.searchProduct("Iphone 16");
    })
});

it("Search for Iphone 16 Images", () => {
    resultPage.checkImageCount();
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