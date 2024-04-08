export class UserAPIPage {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    //Method to Log in
    userLogIn(username, password) {
        return cy.request('GET', `${this.baseUrl}/user/login`, {
            username: username,
            password: password
          })
    }

    //Method to Create a new user
    createUser(userInfo) {
        return cy.request('POST', `${this.baseUrl}/user`, {
            headers: { 'Content-Type': 'application/json' },
            body: userInfo
          })
    }

    //Method to get a user´s details
    getUser(username){
        return cy.request('GET', `${this.baseUrl}/user/${username}`, {
            headers: { 'Content-Type': 'application/json' }
        });
    }   

    //Method to delete a user
    deleteUser(username){
        return cy.request('DELETE', `${this.baseUrl}/user/${username}`, {
            headers: { 'Content-Type': 'application/json' }
        });
    }  
};

