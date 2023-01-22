const { expect } = require("chai");
const { testNumbers } = require("./testNumbers");

describe("SumNumbers checker", () => {
  it("Sum numbers valid", () => {
    expect(testNumbers.sumNumbers(1, 2)).to.be.equal("3.00");
    expect(testNumbers.sumNumbers(-1, -2)).to.be.equal("-3.00");
    expect(testNumbers.sumNumbers(-1, 2)).to.be.equal("1.00");
  });

  it("Invalid Numbers", () => {
    expect(testNumbers.sumNumbers("1", 2)).to.be.equal(undefined);
    expect(testNumbers.sumNumbers(1, "2")).to.be.equal(undefined);
    expect(testNumbers.sumNumbers(-1, "2")).to.be.equal(undefined);
    expect(testNumbers.sumNumbers(-1, undefined)).to.be.equal(undefined);
    expect(testNumbers.sumNumbers(undefined, 1)).to.be.equal(undefined);
    expect(testNumbers.sumNumbers(-1, {})).to.be.equal(undefined);
    expect(testNumbers.sumNumbers({}, 1)).to.be.equal(undefined);
    expect(testNumbers.sumNumbers(-1, [])).to.be.equal(undefined);
    expect(testNumbers.sumNumbers([], 1)).to.be.equal(undefined);
  });
});

describe("numberChecker checker", () => {
  it("Input param validation", () => {
    expect(() => testNumbers.numberChecker("a")).to.be.throw(
      "The input is not a number!"
    );
  });
  it("Input param validation", () => {
    expect(() => testNumbers.numberChecker(["a"])).to.be.throw(
      "The input is not a number!"
    );
  });
  it("Input param validation", () => {
    expect(() => testNumbers.numberChecker({})).to.be.throw(
      "The input is not a number!"
    );
  });
  it("Input param validation", () => {
    expect(() => testNumbers.numberChecker(NaN)).to.be.throw(
      "The input is not a number!"
    );
  });
  it("Input param validation", () => {
    expect(() => testNumbers.numberChecker(undefined)).to.be.throw(
      "The input is not a number!"
    );
  });

  it("Valid input", () => {
    expect(testNumbers.numberChecker(1)).to.be.equal("The number is odd!");
  });
  it("Valid input", () => {
    expect(testNumbers.numberChecker(2)).to.be.equal("The number is even!");
  });
});

describe("averageSumArray checker", () => {
  it("Array average", () => {
    expect(testNumbers.averageSumArray([2, 4])).to.be.equal(3);
  });
  it("Array average", () => {
    expect(testNumbers.averageSumArray([2])).to.be.equal(2);
  });
  it("Array average", () => {
    expect(testNumbers.averageSumArray([-2, 2])).to.be.equal(0);
  });
});
