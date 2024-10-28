const {app} = require("../src/server.js");
const request = require("supertest");

describe("Root route works", () => {
    test("Server returns a 'Hello World!' message", async () => {
        // make a request to "/" route
        // wait for response and store it
        const response = await request(app).get("/");

        // check the bnody of the response for a "Hello World!" string
        expect(response.body.message).toBe("Hello World!");
    });
});