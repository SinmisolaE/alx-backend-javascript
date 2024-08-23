const expect = require("chai").expect;
const { it, describe } = require("mocha");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber()", function() {
    describe("SUM", function() {
        it('checking if numbers round', function() {
	  expect(calculateNumber("SUM", 2, 5)).to.equal(7);
	});

        it('checking if numbers round', function() {
	  expect(calculateNumber("SUM", 4.6, 4.3)).to.equal(9);
	});
    });

    describe("SUBTRACT", function() {
        it('chcking if numbers round', function() {
	  expect(calculateNumber("SUBTRACT", 3, 2)).to.equal(1);
	});

        it('checking if numbers round', function() {
	  expect(calculateNumber("SUBTRACT", 4.7, 2.7)).to.equal(2);
	});

        it('checking if numbers round', function() {
	  expect(calculateNumber("SUBTRACT", -4.7, -2.7)).to.equal(-2);
	});
    });

    describe("DIVIDE", function() {
    
        it('checking if numbers round', function() {
          expect(calculateNumber("DIVIDE", 4, 2)).to.equal(2);
        });

        it('checking if numbers round', function() {
          expect(calculateNumber("DIVIDE", 5, 0)).to.equal("Error");
        });

        it('checking if numbers round', function() {
          expect(calculateNumber("SUBTRACT", -4.7, -2.7)).to.equal(-2);
        });

        it('checking if numbers round', function() {
	  expect(calculateNumber("DIVIDE", -1.4, -1.2)).to.equal(1);
	});
    });
});
