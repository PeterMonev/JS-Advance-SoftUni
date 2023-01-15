const { expect } = require("chai");
const { carService } = require("./03. Car Service");

describe("isItExpensive", () => {
  it("Happy path issue is a Engine", () => {
    expect(carService.isItExpensive("Engine")).to.be.equal(
      "The issue with the car is more severe and it will cost more money"
    );
  });

  it("Happy path issue is a Transmission", () => {
    expect(carService.isItExpensive("Transmission")).to.be.equal(
      "The issue with the car is more severe and it will cost more money"
    );
  });

  it("Happy path issue is a not met ", () => {
    expect(carService.isItExpensive("alabala")).to.be.equal(
      `The overall price will be a bit cheaper`
    );
  });
});

describe("discount", () => {
  it("Invalid inputs", () => {
    expect(() => carService.discount("1", 12).to.be.throw());
  });

  it("Invalid inputs", () => {
    expect(() => carService.discount(1, "12").to.be.throw());
  });

  it("Invalid inputs", () => {
    expect(() => carService.discount("1", "12").to.be.throw());
  });

  it("Invalid inputs", () => {
    expect(() => carService.discount("a", 1).to.be.throw());
  });

  it("Invalid inputs", () => {
    expect(() => carService.discount(1, "a").to.be.throw());
  });

  it("Invalid inputs", () => {
    expect(() => carService.discount(1, {}).to.be.throw());
    expect(() => carService.discount(1, []).to.be.throw());
    expect(() => carService.discount(1, NaN).to.be.throw());
    expect(() => carService.discount(1, null).to.be.throw());
    expect(() => carService.discount(1, undefined).to.be.throw());
    expect(() => carService.discount({}, 1).to.be.throw());
    expect(() => carService.discount([], 1).to.be.throw());
    expect(() => carService.discount(NaN, 1).to.be.throw());
    expect(() => carService.discount(null, 1).to.be.throw());
    expect(() => carService.discount(undefined, 1).to.be.throw());
  });

  it("If the numberOfParts is smaller or equal to 2", () => {
    expect(carService.discount(1, 1)).to.be.equal(
      "You cannot apply a discount"
    );
  });

  it("If the numberOfParts is smaller or equal to 2", () => {
    expect(carService.discount(2, 1)).to.be.equal(
      "You cannot apply a discount"
    );
  });

  it("If the numberOfParts is smaller or equal to 2", () => {
    expect(carService.discount(-2, 1)).to.be.equal(
      "You cannot apply a discount"
    );
  });

  it("Percentage of discount based on the numberOfParts", () => {
    expect(carService.discount(3, 100)).to.be.equal(
      `Discount applied! You saved ${15}$`
    );
  });

  it("Percentage of discount based on the numberOfParts", () => {
    expect(carService.discount(7, 100)).to.be.equal(
      `Discount applied! You saved ${15}$`
    );
  });

  it("Percentage of discount based on the numberOfParts", () => {
    expect(carService.discount(6, 100)).to.be.equal(
      `Discount applied! You saved ${15}$`
    );
  });

  it("Percentage of discount based on the numberOfParts", () => {
    expect(carService.discount(8, 100)).to.be.equal(
      `Discount applied! You saved ${30}$`
    );
  });
});

describe("partsToBuy", () => {
  it("If partsCatalog is empty", () => {
    expect(
      carService.partsToBuy([], ["blowoff valve", "injectors"])
    ).to.be.equal(0);
  });

  it("Invalid inputs", () => {
    expect(() => carService.partsToBuy(0, [])).to.be.throw();
    expect(() => carService.partsToBuy([], 0)).to.be.throw();
    expect(() => carService.partsToBuy([], "a")).to.be.throw();
    expect(() => carService.partsToBuy("a", [])).to.be.throw();
    expect(() => carService.partsToBuy({}, [])).to.be.throw();
    expect(() => carService.partsToBuy([], {})).to.be.throw();
    expect(() => carService.partsToBuy([], NaN)).to.be.throw();
    expect(() => carService.partsToBuy(NaN, [])).to.be.throw();
    expect(() => carService.partsToBuy(undefined, [])).to.be.throw();
    expect(() => carService.partsToBuy([], undefined)).to.be.throw();
    expect(() => carService.partsToBuy([], null)).to.be.throw();
    expect(() => carService.partsToBuy(null, [])).to.be.throw();
    expect(() => carService.partsToBuy(null, null)).to.be.throw();
    expect(() => carService.partsToBuy(undefined, undefined)).to.be.throw();
    expect(() => carService.partsToBuy({}, {})).to.be.throw();
    expect(() => carService.partsToBuy("a", "a")).to.be.throw();
    expect(() => carService.partsToBuy(1, 1)).to.be.throw();
  });

  it("its happy single match", () => {
    let firstArr = [{ part: "blowoff valve", price: 145 }];
    let secondArr = ["blowoff valve"];

    expect(carService.partsToBuy(firstArr, secondArr)).to.deep.equal(145);
  });

  it("its happy mutly match", () => {
    expect(
      carService.partsToBuy(
        [
          {
            part: "a",
            price: 100,
          },
          { part: "b", price: 100 },
        ],
        ["a", "b"]
      )
    ).to.deep.equal(200);
  });
});
