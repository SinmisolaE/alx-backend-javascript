const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul.js");

describe("calculateNumber()", function() {

    it('checking if numbers round', function() {
      const eg = calculateNumber("SUM", 2, 5);
      assert.strictEqual(eg, 7);
    });

    it('chcking if numbers round', function() {
      const eg = calculateNumber("SUBTRACT", 3, 2);
      assert.strictEqual(eg, 1);
    });

    it('checking if numbers round', function() {
      const eg = calculateNumber("DIVIDE", 4, 2);
      assert.strictEqual(eg, 2);
    });

    it('checking if numbers round', function() {
      const eg = calculateNumber("SUM", 4.6, 4.3);
      assert.strictEqual(eg, 9);
    });

    it('checking if numbers round', function() {
      const eg = calculateNumber("SUBTRACT", 4.7, 2.7);
      assert.strictEqual(eg, 2);
    });

    it('checking if numbers round', function() {
      const eg = calculateNumber("DIVIDE", 5, 0);
      assert.strictEqual(eg, "Error");
    });

    it('checking if numbers round', function() {
      const eg = calculateNumber("SUBTRACT", -4.7, -2.7);
      assert.strictEqual(eg, -2);
    });

    it('checking if numbers round', function() {
      const eg = calculateNumber("DIVIDE", -1.4, -1.2);
      assert.strictEqual(eg, 1);
    });
});
