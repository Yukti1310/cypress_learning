/// reference types ="cypress"/>

/*describe("Auth Examples", () => {
    it("Basic Auth", () => {
        cy.request({
            method: 'GET',
            url: "https://postman-echo.com/basic-auth",
            auth: {
                username: "postman",
                password: "password"
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.authenticated).to.be.true;
        })
    });

    it("Digest Auth", () => {
        cy.request({
            method: 'GET',
            url: "https://postman-echo.com/basic-auth",
            auth: {
                username: "postman",
                password: "password",
                method: "digest"
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.authenticated).to.be.true;
        });
    });

    it("Bearer Token Auth", () => {
        cy.request({
            method: 'GET',
            url: "https://abcd",
            headers: {
                Authorization: "Bearer " + "135"
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
        });
    })

    it("API Key Authenciation", () => {
        const token = "669828b28a41f5a088f4501f37367727"
        cy.request({
            method: 'GET',
            url: "http://api.weatherstack.com/current",
            qs: {
                query: "New York",
                accessaccess_key: token
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
        });
    })

    it("Outh 2 Authenciation Auth", () => {
        cy.request({
            method: 'GET',
            url: "https://abcd",
            qs: {
                client_id: "Ov23li0s1ITbBBGAU6fc",
                client_secret: "a49538056af57288a3948b3477ea5b1df2c6fce0",
                code: "f3be86addd1871505e28"
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            cy.log(response.body)
        });
    })

})
    */