import { ELEMENT_STATE } from "../utilities/misc";

const selectors = {
    searchBox: "#twotabsearchtextbox",
    suggestionContainer: ".two-pane-results-container>div>div",
    suggestionWords: "[id*='sac-suggestion-row'] div[id*='cell-1'] div[role=button]",
    searchButton: "//*[@id='nav-search-submit-button']" // using XPath
};

function verifySearchBarAndSuggestions(productInformation) {
    const product = productInformation.toLowerCase();
    cy.get(selectors.searchBox).should(ELEMENT_STATE.VISIBLE);
    cy.get(selectors.searchBox).type(product);
    cy.get(selectors.searchBox).should(ELEMENT_STATE.HAVE_VALUE, product);
    cy.get(selectors.suggestionContainer).should(ELEMENT_STATE.HAVE_LENGTH, 10);
    cy.get(selectors.suggestionWords).eq(0).should(ELEMENT_STATE.CONTAINS, product);
    cy.get(selectors.suggestionWords).then(($el) => {
        cy.wrap($el).should(ELEMENT_STATE.CONTAINS, product);
    });
}

function searchProduct(product) {
    cy.get(selectors.searchBox).clear();
    cy.get(selectors.searchBox).type(product);
    cy.xpath(selectors.searchButton).click();
}

export const homePage = {
    verifySearchBarAndSuggestions,
    searchProduct
};
