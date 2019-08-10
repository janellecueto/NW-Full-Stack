var expect = require("chai").expect;
var calculateTax = require("../tax");

// Write tests for the calculateTax function here

describe("calculateTax", function(){
    it("should apply tax to integer", function(){
        var amount = 2;
        
        var result = calculateTax(amount);

        expect(result).to.equal(2.16);
    });

    it("should apply tax to decimal", function(){
        var amount = 1.99;
        
        var result = calculateTax(amount);

        expect(result).to.equal(2.15);
    })

    it("should throw error", function(){
        var call = function(){
            calculateTax("phil");
        }

        expect(call).to.throw(Error, "Price is not a number");
    })
})