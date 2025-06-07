///reference types ="cypress"/>
import { OK_STATUS_CODE } from "../utilities/misc";
describe("Query Parameter", () => {
    it("Passing Query Parameters", () => {
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
        })
    })
})