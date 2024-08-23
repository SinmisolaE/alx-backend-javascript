const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./0-calcul");

describe("calculateNumber()", function() {

    it('checking if numbers round', function() {
      const eg = calculateNumber(2, 5);
      assert.strictEqual(eg, 7);
    });

    it('chcking if numbers round', function() {
      const eg = calculateNumber(3, 0);
      assert.strictEqual(eg, 3);
    });

    it('checking if numbers round', function() {
      const eg = calculateNumber(1.1, 4.3);
      assert.strictEqual(eg, 5);
    });

    it('checking if numbers round', function() {
      const eg = calculateNumber(4.6, 4.3);
      assert.strictEqual(eg, 9);
    });

    it('checking if numbers round', function() {
      const eg = calculateNumber(4.7, 2.7);
      assert.strictEqual(eg, 8);
    });

    it('checking if numbers round', function() {
      const eg = calculateNumber(0, 0);
      assert.strictEqual(eg, 0);
    });

    it('checking if numbers round', function() {
      const eg = calculateNumber(-4.7, -2.7);
      assert.strictEqual(eg, -8);
    });

    it('checking if numbers round', function() {
      const eg = calculateNumber(-1.4, -1.2);
      assert.strictEqual(eg, -2);
    });
});
