const request = require("request");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe("Index page", function() {
  const options = {
    url: "http://localhost:7865/",
    method: 'GET'
  }

  it("check correct status code", function(done) {
    request(options, function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("check correct content", function(done) {
    request(options, function(err, res, body) {
      expect(body).to.contain("Welcome to the payment system");
      done();
    });
  });

  it("check correct content length", function(done) {
    request(options, function(err, res, boby) {
      expect(res.headers['content-length']).to.equal('29');
      done();
    });
  });
});

describe("Cart Page", function(done) {
  it("check correct status code for correct url", function(done) {
    request.get("https://localhost:7865/cart/12", function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("check correct content for correct url", function(done) {
    request.get("http://localhost:7865/cart/12", function(err, res, body) {
      expect(body).to.contain("Payment methods for cart 12");
      done();
    });
  });
  it("check correct status code for incorrect url", function(done) {
    request.get("http://localhost:7865/cart/kim", function(err, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
