const { expect } = require("chai");
const { isOddOrEven } = require("./02.EvenOrOdd");

describe("Even or Odd Checker", () => {
  it("If it is not a string", () => {
    expect(isOddOrEven(Number)).to.be.undefined;
    expect(isOddOrEven(NaN)).to.be.undefined;
    expect(isOddOrEven(undefined)).to.be.undefined;
  });

  it("If it string is even", () => {
    expect(isOddOrEven("ab")).to.equal("even");
  });

  it("If it string is odd", () => {
    expect(isOddOrEven("ab3")).to.equal("odd");
  });

  it("if it string is multiply", () => {
    expect(isOddOrEven("asd asd qw kozv ")).to.equal("even");
  });
});
