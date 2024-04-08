class WebAutomationSearchTerm {
    get = {
        cookiesButton : () => cy.get('#W0wltc'),
        searchInput : () => cy.get('#APjFqb'),
        cite : () => cy.get('cite')
    };

    clickAcceptCookiesButton() {
        this.get.cookiesButton().click();
    }
    searchTerm(term){
        this.get.searchInput().type(term + '{enter}');
    }
    clickLinkByWebsiteName(webpageName){
        this.get.cite().filter((index, elem) => {
            return Cypress.$(elem).text().includes(webpageName);
          }).first().click();
    }

};
export const webAutomationSearchTerm = new WebAutomationSearchTerm();