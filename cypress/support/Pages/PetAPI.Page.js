export class PetAPIPage {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    //Method to get a pet by its status
    getPetByStatus(status) {
        return cy.request({
          method: 'GET',
          url: `${this.baseUrl}/pet/findByStatus`,
          qs: {
            status: status
          }
        }).then((response) => {
            expect(response.status).to.eq(200);
            return response.body.map(pet => ({id: pet.id, name: pet.name, status: pet.status}));
        }); 
    }  
};