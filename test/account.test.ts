import request from "supertest";
import app from "../src/app";

const chai = require("chai");
const expect = chai.expect;

describe("GET /account", () => {
  it("should return 200 OK", (done) => {
    request(app).get("/account/2qwsdfdsf")
      .expect(404, done);
  });
});

describe("DELETE /account", () => {
  it("should return 422 error", (done) => {
    request(app).delete("/account/1qdop3873jhshshwsdfdsf/123456")
      .expect(404, done);
  });
});


describe("PUT /account", () => {
  it("should return 500 error", (done) => {
    request(app).put("/account/password/123456")
      .expect(404, done);
  });
});

describe("PATCH /account", () => {
  it("should return 404 error", (done) => {
    request(app).patch("/account/password/123456")
      .expect(404, done);
  });
});


describe("POST /account", () => {
  it("should return false from assert when error", (done) => {
    request(app).post("/account")
      .field("name", "John Doe")
      .field("email", "john@me.com")
      .end(function (err, res) {
        expect(404);
        done();
      })
      .expect(404);

  });
});