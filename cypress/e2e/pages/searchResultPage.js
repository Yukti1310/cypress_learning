import { ELEMENT_STATE } from "../utilities/misc";

const selectors = {
    heading_result: "[data-component-type='s-search-results'] div[class='s-no-outline'] h2",
    image_result: "[data-component-type='s-search-results'] [class='a-section'] img",
}

function checkImageCount() {
    cy.get(selectors.heading_result).first().should(ELEMENT_STATE.VISIBLE).scrollIntoView();
    cy.get(selectors.image_result).should('have.length.greaterThan', 10);;
}

export const searchResultPage = {
    checkImageCount
}