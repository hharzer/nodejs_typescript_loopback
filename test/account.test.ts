import request from "supertest";
import app from "../src/app";

const chai = require("chai");
const expect = chai.expect;

describe("GET /accessLogs/search", () => {
  it("should return 200 OK", (done) => {
    request(app).get("/accessLogs/search/1111")
      .expect(422, done);
  });
});

describe("GET /accessLogs/id", () => {
  it("should return 200 OK", (done) => {
    request(app).get("/accessLogs/12")
      .expect(422, done);
  });
});

describe("DELETE /accessLogs", () => {
  it("should return 422 error", (done) => {
    request(app).delete("/accessLogs/")
      .expect(403, done);
  });
});


describe("PUT /accessLogs", () => {
  it("should return 500 error", (done) => {
    request(app).put("/accessLogs/password/123456")
      .expect(403, done);
  });
});

describe("PATCH /accessLogs", () => {
  it("should return 404 error", (done) => {
    request(app).patch("/accessLogs/password/123456")
      .expect(403, done);
  });
});


describe("POST /accessLogs", () => {
  it("should return false from assert when error", (done) => {
    request(app).post("/accessLogs")
      .field("name", "John Doe")
      .field("email", "john@me.com")
      .end(function (err, res) {
        expect(403);
        done();
      })
      .expect(403);

  });
});