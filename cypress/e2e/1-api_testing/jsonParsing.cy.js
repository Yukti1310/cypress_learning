/// reference types ="cypress"/>

import { OK_STATUS_CODE } from "../utilities/misc";

describe("Parsing Json Response", () => {
    it("GET Request Json Response Parsing", () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            qs: {
                "page": 2
            }
        }).then((response) => {
            expect(response.status).to.equal(OK_STATUS_CODE);
            expect(response.body.page).to.eq(2);
            expect(response.body.data).to.have.length.greaterThan(3);
            expect(response.body.data[0].email).equals("michael.lawson@reqres.in");
            const users = response.body.data;
            users.forEach((user) => {
                cy.log('Email: ' + user.email);
            });
        })
    })
})