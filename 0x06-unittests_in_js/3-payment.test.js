const { it, describe } = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
    it("check that Utils.calculateNumber is called once", function() {
      const spy = sinon.spy(Utils, "calculateNumber");
      sendPaymentRequestToApi(15, 20);
      assert(spy.calledOnce);
      spy.restore();
    });
});
