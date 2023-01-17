const { expect } = require("chai");
const { flowerShop } = require("./flowerShop");

describe("Invalid Parameters calcPriceOfFlowers", () => {
  it("Invalid params", () => {
    expect(() =>
      flowerShop.calcPriceOfFlowers(1, "1", "1").to.be.throw("Invalid input!")
    );
  });
  it("Invalid params", () => {
    expect(() =>
      flowerShop.calcPriceOfFlowers(1, "1", 1).to.be.throw("Invalid input!")
    );
  });
  it("Invalid params", () => {
    expect(() =>
      flowerShop.calcPriceOfFlowers([], 1, 1).to.be.throw("Invalid input!")
    );
  });
  it("Invalid params", () => {
    expect(() =>
      flowerShop.calcPriceOfFlowers("a", [], 1).to.be.throw("Invalid input!")
    );
    expect(() =>
      flowerShop.calcPriceOfFlowers("a", {}, 1).to.be.throw("Invalid input!")
    );
    expect(() =>
      flowerShop.calcPriceOfFlowers({}, 1, 1).to.be.throw("Invalid input!")
    );
    expect(() =>
      flowerShop.calcPriceOfFlowers("a", null, 1).to.be.throw("Invalid input!")
    );
    expect(() =>
      flowerShop.calcPriceOfFlowers(null, 1, 1).to.be.throw("Invalid input!")
    );
    expect(() =>
      flowerShop
        .calcPriceOfFlowers(undefined, 1, 1)
        .to.be.throw("Invalid input!")
    );
    expect(() =>
      flowerShop
        .calcPriceOfFlowers("a", undefined, 1)
        .to.be.throw("Invalid input!")
    );
    expect(() =>
      flowerShop.calcPriceOfFlowers("a", NaN, 1).to.be.throw("Invalid input!")
    );
    expect(() =>
      flowerShop.calcPriceOfFlowers(NaN, 1, 1).to.be.throw("Invalid input!")
    );
  });

  it("Valid price * quantity", () => {
    expect(flowerShop.calcPriceOfFlowers("a", 1, 1)).to.be.equal(
      `You need $1.00 to buy a!`
    );
  });
});

describe("checkFlowersAvailable, existing flowers", () => {
  it("Existing Flower", () => {
    expect(flowerShop.checkFlowersAvailable("a", ["a"])).to.be.equal(
      `The a are available!`
    );
  });

  it("Existing Flower", () => {
    expect(flowerShop.checkFlowersAvailable("a", ["a", "b"])).to.be.equal(
      `The a are available!`
    );
  });

  it("Not existing Flower", () => {
    expect(flowerShop.checkFlowersAvailable("a", ["b"])).to.be.equal(
      `The a are sold! You need to purchase more!`
    );
  });

  it("Not existing Flower", () => {
    expect(flowerShop.checkFlowersAvailable("a", ["b", "c"])).to.be.equal(
      `The a are sold! You need to purchase more!`
    );
  });
});

describe("sellFlowers checker", () => {
  it("Invalid input params", () => {
    expect(() => flowerShop.sellFlowers(1, [])).to.be.throw("Invalid input!");
    expect(() => flowerShop.sellFlowers("a", 1)).to.be.throw("Invalid input!");
    expect(() => flowerShop.sellFlowers([], "a")).to.be.throw("Invalid input!");
    expect(() => flowerShop.sellFlowers([], {})).to.be.throw("Invalid input!");
    expect(() => flowerShop.sellFlowers({}, 1)).to.be.throw("Invalid input!");
    expect(() => flowerShop.sellFlowers([], NaN)).to.be.throw("Invalid input!");
    expect(() => flowerShop.sellFlowers(NaN, 1)).to.be.throw("Invalid input!");
    expect(() => flowerShop.sellFlowers(undefined, 1)).to.be.throw(
      "Invalid input!"
    );
    expect(() => flowerShop.sellFlowers([], undefined)).to.be.throw(
      "Invalid input!"
    );
    expect(() => flowerShop.sellFlowers(null, 1)).to.be.throw("Invalid input!");
    expect(() => flowerShop.sellFlowers([], null)).to.be.throw(
      "Invalid input!"
    );
    expect(() => flowerShop.sellFlowers(1, 1)).to.be.throw("Invalid input!");
    expect(() => flowerShop.sellFlowers([], [])).to.be.throw("Invalid input!");
    expect(() => flowerShop.sellFlowers("a", "a")).to.be.throw(
      "Invalid input!"
    );
  });

  it("Valid input", () => {
    expect(flowerShop.sellFlowers(["a", "b", "c"], 2)).to.be.equal("a / b");
  });

  it("Valid input", () => {
    expect(flowerShop.sellFlowers(["a", "b", "c"], 1)).to.be.equal("a / c");
  });

  it("Valid input", () => {
    expect(flowerShop.sellFlowers(["a", "b", "c"], 0)).to.be.equal(" b / c");
  });
});
