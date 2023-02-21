const { expect } = require("chai");
const { sum } = require("./numbers");

describe("Numbers Checker", () => {
  it("Input Array as numbers", () => {
    expect(sum([0])).to.be.equal(0);
    expect(sum([1, 1, 1, 1])).to.be.equal(4);
    expect(sum([-1, 1, 1, 1])).to.be.equal(2);
    expect(sum([1.1, 1, 1, 1])).to.be.equal(4.1);
    expect(sum([1.1, 1, -1, 1])).to.be.equal(2.1);
    expect(sum(["1", "1"])).to.be.equal(2);
  });

  it("String = false", () => {
    expect(sum(["a", "b", "c"])).to.be.NaN;
  });

  it("String ele = false", () => {
    expect(sum(["a", 2, 3])).to.be.NaN;
  });
});
