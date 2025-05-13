/// <reference types="cypress"/>

describe("Verify HTTP Request", () => {
    it("GET Request", () => {
        cy.request('GET', "https://reqres.in/api/users?page=2").its('status').should('equal', 200);
    })

    it('POST Request', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            headers:
            {
                "x-api-key": "reqres-free-v1"
            },
            body: {
                email: "eve.holt@reqres.in",
                password: "pistol"
            }
        }).its('status').should('eq', 201)
    });

    it('PUT Request', () => {
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            headers:
            {
                "x-api-key": "reqres-free-v1"
            },
            body: {

                name: "morpheus",
                job: "zion resident"

            }
        }).its('status').should('equal', 200)
    });

    it('DELETE Request', () => {
        cy.request(
            {
                method: 'DELETE',
                url: 'https://reqres.in/api/users/2',
                headers: {
                    "x-api-key": "reqres-free-v1"
                }
            }
        ).its('status').should('equal', 204);
    })

})