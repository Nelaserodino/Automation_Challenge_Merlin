import data from '../../fixtures/data.json'
import { webAutomationSearchTerm } from '../../support/Pages/WebAutomationSearchTerm.Page';


describe('Web Automation', () => {
    it('Chack that the user can search for the term "automatización" on google', () => {
      cy.visit(data.googleWebsite)
      cy.url().should('include','google')
      webAutomationSearchTerm.clickAcceptCookiesButton();
      webAutomationSearchTerm.searchTerm(data.searchTerm)
      webAutomationSearchTerm.clickLinkByWebsiteName(data.linkIncludes)  
      
      cy.origin(data.wikipediaWebsite, { args: data }, (data) => {
        cy.get('p').then(($paragraphs) => {
          const matchingParagraphs = $paragraphs.filter((i, p) => {
            const text = p.innerText;
            return text.includes(data.yearOfFirstAutomatedProcess) && data.processKeywords.every(keyword => text.includes(keyword));
          });

          expect(matchingParagraphs.length).to.be.greaterThan(0);

          if (matchingParagraphs.length > 0) {
            const paragraphText = Cypress.$(matchingParagraphs[0]).text();
            expect(paragraphText).to.include(data.yearOfFirstAutomatedProcess);
            cy.screenshot('full page wikipedia');
            cy.wrap(matchingParagraphs[0]).screenshot('year of first automated process');
          }else {
            throw new Error('No matching paragraphs found.');
          }
        });
      });
    })
  });