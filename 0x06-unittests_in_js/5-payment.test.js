const {it, describe} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToAPI = require("./5-payment");
const expect = require("chai").expect;

describe("sendPaymentRequestToAPI", function() {
    beforeEach("Set up spy to use for each test", function() {
      sinon.spy(console, "log");
    });

    afterEach("restore spy after each test", function() {
      console.log.restore();
    });

    it("check that console.log is called with the right arg", function() {
      sendPaymentRequestToAPI(100, 20);
      expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;
    });

    it("check that console.log is called with the right arg", function() {
      sendPaymentRequestToAPI(10, 10);
      expect(console.log.withArgs("The total is: 20").calledOnce).to.be.true
    });
});
