/// <reference types="cypress" />
describe("API Chaining", () => {

    it("GET", () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users",
            qs:
            {
                "page": 2
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            const id = response.body.data[0].id;
            cy.log(id);
            cy.request({
                method: "GET",
                url: `https://reqres.in/api/users/${id}`,
                headers:
                {
                    "x-api-key": "reqres-free-v1"
                }
            })
                .then((response) => {
                    expect(response.status).to.eq(200);
                    cy.log(JSON.stringify(response.body));

                    cy.request({
                        method: "DELETE",
                        url: `https://reqres.in/api/users/${id}`,
                        headers:
                        {
                            "x-api-key": "reqres-free-v1"
                        }
                    }).then((response) => {
                        expect(response.status).to.eq(204);
                        cy.request({
                            method: "GET",
                            url: `https://reqres.in/api/users/${id}`,
                            headers:
                            {
                                "x-api-key": "reqres-free-v1"
                            }
                        })
                            .then((response) => {
                                expect(response.status).to.eq(200);
                                cy.log(JSON.stringify(response.body));
                            })
                    })
                })
        })
    })
})