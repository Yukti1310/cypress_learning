import { homePage as home } from "../pages/homePage";
import { searchResultPage as resultPage } from "../pages/searchResultPage";

describe("Search Iphone 16 on Amazon", () => {

    beforeEach("Navigate to Amazon", () => {
        cy.visit("/");
        home.searchProduct("Iphone 16");
    });

    it("Search for Iphone 16 Images", () => {
        resultPage.checkImageCount();
        // cy.screenshot("Iphone 16 Result page");
    });

    it.only("Find iphone with cheapest rate", () => {
        const results = [];

        cy.get('[class="puisg-col-inner"]').each(($el) => {
            const titleElement = $el.find('[data-cy="title-recipe"] h2');
            const titleText = titleElement.text();

            if (titleText.includes("iPhone")) {
                const priceElement = $el.find('[data-cy="price-recipe"]')
                    .parent('div')
                    .find('div a[aria-describedby="price-link"] span.a-price span.a-offscreen')
                    .first();

                const priceText = priceElement.text().replace(/[^0-9.]/g, '');
                const price = parseFloat(priceText);

                if (price) {
                    results.push({ title: titleText, price });
                }
            }
        }).then(() => {
            if (results.length > 0) {
                const cheapest = results.reduce((min, curr) => curr.price < min.price ? curr : min);
                cy.log(`Cheapest iPhone: ₹${cheapest.price} - ${cheapest.title}`);

                cy.get('[class="puisg-col-inner"]').each(($el) => {
                    const titleText = $el.find('[data-cy="title-recipe"] h2').text().trim();
                    if (titleText === cheapest.title) {
                        cy.wrap($el).find('h2').first().click({ force: true });
                    }
                });

            } else {
                cy.log("No iPhone found");
            }
        });
    });


});
// This test suite searches for "Iphone 16" on Amazon and performs two tests: