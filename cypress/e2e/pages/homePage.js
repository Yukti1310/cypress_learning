class homePage {
    txt_search = "#twotabsearchtextbox";
    container = ".two-pane-results-container>div>div"
    container_suggestion = ".two-pane-results-container>div>div";
    suggestion_words = "[id*='sac-suggestion-row'] div[id*='cell-1'] div[role=button]";
    btn_search = "//*[@id='nav-search-submit-button']";


    enterSearchText(text) {
        cy.get(this.txt_search).clear().type(text);
        return this;
    }

    clickSearch() {
        cy.get(this.btn_search).should('be.visible').click();
        return this;
    }
}
