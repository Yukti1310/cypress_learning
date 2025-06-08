/// <reference types="cypress" />
import { homePage as home } from "../pages/homePage.js";

describe("Verify basics of amazon.in", () => {

    before("Navigate to Page", () => {
        cy.visit("/");
    })

    it("verify title of amazon.in", () => {

        cy.title().should('eq', 'Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
        cy.url().should('include', 'in');
    });

    it("Verify searchBar and its suggestion box is present", () => {
        cy.visit("/");
        home.verifySearchBarAndSuggestions("Iphone 16");
    })

    it("Search Iphone 16", () => {
        cy.visit("/");
        home.searchProduct("Iphone 16");
    });
})