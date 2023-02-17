const { expect } = require("chai");
const { lookupChar } = require("./03.CharLookup");

describe("Look up char Checker", () => {
  it("First param not a string", () => {
    expect(lookupChar(0, 0)).to.be.undefined;
    expect(lookupChar(NaN, 0)).to.be.undefined;
    expect(lookupChar(Infinity, 0)).to.be.undefined;
    expect(lookupChar(undefined, 0)).to.be.undefined;
    expect(lookupChar(0)).to.be.undefined;
  });

  it("Second param is not a number", () => {
    expect(lookupChar("a", NaN)).to.be.undefined;
    expect(lookupChar("a", undefined)).to.be.undefined;
    expect(lookupChar("a", "2")).to.be.undefined;
    expect(lookupChar("a", "a")).to.be.undefined;
    expect(lookupChar("a")).to.be.undefined;
  });

  it("The index is  negative or equal ", () => {
    expect(lookupChar("qwe", -1)).to.be.equal("Incorrect index");
    expect(lookupChar("qwe", 3)).to.be.equal("Incorrect index");
  });

  it("The index is bigger ", () => {
    expect(lookupChar("a", 15)).to.be.equal("Incorrect index");
  });

  it("It is correct ", () => {
    expect(lookupChar("a", 0)).to.be.equal("a");
    expect(lookupChar("ab", 1)).to.be.equal("b");
  });
});
