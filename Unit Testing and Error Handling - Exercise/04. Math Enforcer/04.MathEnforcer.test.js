const { expect } = require("chai");
const { mathEnforcer } = require("./04.MathEnforcer");

describe("mathEnforcer addFive checker", () => {
  it("Parameter is not a number", () => {
    expect(mathEnforcer.addFive("1")).to.be.undefined;
    expect(mathEnforcer.addFive("a")).to.be.undefined;
    expect(mathEnforcer.addFive([])).to.be.undefined;
    expect(mathEnforcer.addFive({})).to.be.undefined;
    expect(mathEnforcer.addFive("NaN")).to.be.undefined;
    expect(mathEnforcer.addFive(undefined)).to.be.undefined;
  });

  it("Parameter is a number add 5", () => {
    expect(mathEnforcer.addFive(0)).to.be.equal(5);
    expect(mathEnforcer.addFive(5)).to.be.equal(10);
  });

  it(`valid input negative Integer -> (-1) -> 4`, () => {
    expect(mathEnforcer.addFive(-1)).to.eq(4);
  });

  it("valid input positive Integer ", () => {
    expect(mathEnforcer.addFive(0.1)).to.be.equal(5.1);
  });
});

describe("mathEnforcer subractTen checker", () => {
  it("Parameter is not a number", () => {
    expect(mathEnforcer.subtractTen("1")).to.be.undefined;
    expect(mathEnforcer.subtractTen("a")).to.be.undefined;
    expect(mathEnforcer.subtractTen([])).to.be.undefined;
    expect(mathEnforcer.subtractTen({})).to.be.undefined;
    expect(mathEnforcer.subtractTen("NaN")).to.be.undefined;
    expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
  });

  it("Parameter is number subtact 10", () => {
    expect(mathEnforcer.subtractTen(0)).to.be.equal(-10);
  });

  it("Parameter is number subtact 10", () => {
    expect(mathEnforcer.subtractTen(0.1)).to.be.equal(-9.9);
  });

  it("Parameter is number subtact", () => {
    expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
  });
});

describe("mathEnforcer sum checker", () => {
  it("Two parameters are not a number", () => {
    expect(mathEnforcer.sum("0", "0")).to.be.undefined;
    expect(mathEnforcer.sum("0", 1)).to.be.undefined;
    expect(mathEnforcer.sum(1, "0")).to.be.undefined;
    expect(mathEnforcer.sum("0")).to.be.undefined;
    expect(mathEnforcer.sum([], 0)).to.be.undefined;
    expect(mathEnforcer.sum(1, [])).to.be.undefined;
    expect(mathEnforcer.sum("a", 1)).to.be.undefined;
    expect(mathEnforcer.sum(1, "a")).to.be.undefined;
    expect(mathEnforcer.sum(1, undefined)).to.be.undefined;
    expect(mathEnforcer.sum(undefined, 1)).to.be.undefined;
    expect(mathEnforcer.sum({}, 1)).to.be.undefined;
    expect(mathEnforcer.sum(1, {})).to.be.undefined;
  });

  it("Both parameters are valid return their sum", () => {
    expect(mathEnforcer.sum(1, 1)).to.be.equal(2);
  });

  it("Both parameters are valid and their are negative return their sum", () => {
    expect(mathEnforcer.sum(-1, -1)).to.be.equal(-2);
  });

  it("Both parameters are valid and their are negative floating point return their sum", () => {
    expect(mathEnforcer.sum(-1.1, -1.1)).to.be.equal(-2.2);
  });

  it("Both parameters are valid and their with floating point return their sum", () => {
    expect(mathEnforcer.sum(1.1, 1.1)).to.be.equal(2.2);
  });
});
