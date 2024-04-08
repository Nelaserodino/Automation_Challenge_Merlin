import data from '../../fixtures/data.json'
import { webAutomationSearchTerm } from '../../support/Pages/WebAutomationSearchTerm.Page';


describe('Web Automation', () => {
    it('Chack that the user can search for the term "automatización" on google', () => {
      cy.visit(data.googleWebsite)
      cy.url().should('include','google')
      webAutomationSearchTerm.clickAcceptCookiesButton();
      webAutomationSearchTerm.searchTerm(data.searchTerm)
      webAutomationSearchTerm.clickLinkByWebsiteName(data.linkIncludes)  
      
      cy.origin(data.wikipediaWebsite, { args: [data] }, (data) => {
        cy.get('p').then(($paragraphs) => {
          const matchingParagraphs = $paragraphs.filter((i, p) => {
            const text = p.innerText;
            return text.includes(data.yearOfFirstAutomatedProcess) && text.includes(data.processKeywords[0]) && text.includes(data.processKeywords[1]);
          });
        
          if (matchingParagraphs.length > 0) {
            cy.wrap(matchingParagraphs).first().then((p) => {
              const paragraphText = p.text();
              expect(paragraphText).to.include(data.yearOfFirstAutomatedProcess);
              cy.screenshot(p);
            });
          }
        });
      });
    })
  });