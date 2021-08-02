let multiplyEnforcer = require("../multiplyEnforcer.js");

console.log(multiplyEnforcer);

//const chai = require("chai");

var should = require("chai").should();
var { expect } = require("chai"); // imports hundreds of lines of code we can now use, a library of code.
//console.log(expect);

describe("Tests for multiplyBy10() method", function () {
	it("Should return 200 when the argument is 20", function () {
		expect(multiplyEnforcer.multiplyBy10(20)).to.equal(200);
	});
	it("should return -40 when the argument is -4", function () {
		expect(multiplyEnforcer.multiplyBy10(-4)).to.equal(-40);
	});
	it("Should be within .10 of 40 when the argument is 3.99", function () {
		expect(multiplyEnforcer.multiplyBy10(3.99)).to.be.closeTo(40, 0.1);
	});
	it("Should be within return 'undefined' when argument is not a number", function () {
		expect(multiplyEnforcer.multiplyBy10("hello")).to.equal(undefined);
	});
});

describe("Tests for stringMultiplyBy3point5() method", function () {
	it("Should return a string '35' when the argument is 10", function () {
		expect(multiplyEnforcer.stringMultiplyBy3point5(10)).to.equal("35");
	});
	it("should return '-105' when the argument is -30", function () {
		expect(multiplyEnforcer.stringMultiplyBy3point5(-30)).to.equal("-105");
	});
	it("Should be within return 'Please enter a valid number!' when argument is not a number", function () {
		expect(multiplyEnforcer.stringMultiplyBy3point5("hello")).to.equal(
			"Please enter a valid number!"
		);
	});
});

describe("Tests for multiplyTwoNums() method", function () {
	it("Should return 200 when the argument is 20,10", function () {
		expect(multiplyEnforcer.multiplyTwoNums(20, 10)).to.equal(200);
	});
	it("should return -40 when the argument is -4,10", function () {
		expect(multiplyEnforcer.multiplyTwoNums(-4, 10)).to.equal(-40);
	});
	it("Should be within return [num1,num2] if num1 is not a number or num2 is not a number", function () {
		expect(multiplyEnforcer.multiplyTwoNums("hello", 2)).to.be(
			`[ 'hello',2 ]`
		);
	});
});
