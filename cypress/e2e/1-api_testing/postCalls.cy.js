///refernce types="cypress" />
import { faker } from '@faker-js/faker'

describe('Post Calls', () => {
    it("Post Call with hard coded values", () => {

        const requestBody = {
            email: "eve.holt@reqres.in",
            password: "pistol"
        }
        cy.request(
            {
                method: 'POST',
                url: 'https://reqres.in/api/users',
                headers:
                {
                    "x-api-key": "reqres-free-v1"
                },
                body: requestBody
            }).then((response) => {
                expect(response.status).equal(201);
                expect(response.body.email).to.include('eve.holt@reqres.in')
            })
    });

    it("POST with Dynamic jsonObject", () => {
        const requestBody = {
            email: Math.random.toString(5).substring(2),
            password: "pistol"
        }

        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            headers: {
                "x-api-key": "reqres-free-v1"
            },
            body: requestBody
        }).then((response) => {
            expect(response.status).equal(201),
                expect(response.body.email).to.equal(requestBody.email)
        });
    });

    it("POST with fixture file", () => {

        cy.fixture('postCall').then((data) => {
            const requestBody = data
            cy.request(
                {
                    method: 'POST',
                    url: 'https://reqres.in/api/users',
                    headers:
                    {
                        "x-api-key": "reqres-free-v1"
                    },
                    body: requestBody
                }).then((response) => {
                    expect(response.status).equal(201);
                    expect(response.body.email).to.include('eve.holt@reqres.in')
                    expect(response.body).has.property('email', requestBody.email)
                })
        })
    });

    it("Post Request with Faker", () => {
        const requestBody = {
            email: faker.internet.email(),
            password: faker.internet.password()
        }

        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            headers: {
                "x-api-key": "reqres-free-v1"
            },
            body: requestBody
        }).then((response) => {
            expect(response.status).equal(201),
                expect(response.body.email).to.equal(requestBody.email)
        });
    })
})
