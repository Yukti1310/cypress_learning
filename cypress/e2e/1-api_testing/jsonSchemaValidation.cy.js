/// reference types ="cypress"/>
import { OK_STATUS_CODE } from "../utilities/misc";
const Ajv = require('ajv');
const schemaValidator = new Ajv();
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
            var schema = {
                "$schema": "http://json-schema.org/draft-07/schema#",
                "title": "Generated schema for Root",
                "type": "object",
                "properties": {
                    "page": {
                        "type": "number"
                    },
                    "per_page": {
                        "type": "number"
                    },
                    "total": {
                        "type": "number"
                    },
                    "total_pages": {
                        "type": "number"
                    },
                    "data": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "number"
                                },
                                "email": {
                                    "type": "string"
                                },
                                "first_name": {
                                    "type": "string"
                                },
                                "last_name": {
                                    "type": "string"
                                },
                                "avatar": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "id",
                                "email",
                                "first_name",
                                "last_name",
                                "avatar"
                            ]
                        }
                    },
                    "support": {
                        "type": "object",
                        "properties": {
                            "url": {
                                "type": "string"
                            },
                            "text": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "url",
                            "text"
                        ]
                    }
                },
                "required": [
                    "page",
                    "per_page",
                    "total",
                    "total_pages",
                    "data",
                    "support"
                ]
            }

            const validate = schemaValidator.compile(schema);
            const status = validate(response.body);
            cy.log(status);
            expect(status).to.be.true;
        })
    })
})