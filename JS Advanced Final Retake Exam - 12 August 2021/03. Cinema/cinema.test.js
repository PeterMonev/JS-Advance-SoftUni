const { expect } = require("chai");
const { cinema } = require("./cinema");

describe("showMovies checker", () => {
  it("0 length check input Arr", () => {
    expect(cinema.showMovies([])).to.be.equal(
      "There are currently no movies to show."
    );
  });
  it("Valid input", () => {
    expect(cinema.showMovies(["a"])).to.be.equal("a");
    expect(cinema.showMovies(["a", "b"])).to.be.equal("a, b");
  });
});

describe("ticketPrice checker", () => {
  it("Valid Input", () => {
    expect(cinema.ticketPrice("Premiere")).to.be.equal(12.0);
    expect(cinema.ticketPrice("Normal")).to.be.equal(7.5);
    expect(cinema.ticketPrice("Discount")).to.be.equal(5.5);
  });

  it("Invalid input", () => {
    expect(() => cinema.ticketPrice("a")).to.be.throw(
      "Invalid projection type."
    );
    expect(() => cinema.ticketPrice(1)).to.be.throw(
        "Invalid projection type."
      );
      expect(() => cinema.ticketPrice('a','a')).to.be.throw(
        "Invalid projection type."
      );
      expect(() => cinema.ticketPrice([])).to.be.throw(
        "Invalid projection type."
      );
      expect(() => cinema.ticketPrice({})).to.be.throw(
        "Invalid projection type."
      );
  });
});

describe("swapSeatsInHall checker", () => {
  it("Invalid Input", () => {
    expect(cinema.swapSeatsInHall(1)).to.be.equal(
      "Unsuccessful change of seats in the hall."
    );
    expect(cinema.swapSeatsInHall("", 1)).to.be.equal(
      "Unsuccessful change of seats in the hall."
    );
    expect(cinema.swapSeatsInHall("a", 1)).to.be.equal(
      "Unsuccessful change of seats in the hall."
    );
    expect(cinema.swapSeatsInHall(1, "a")).to.be.equal(
      "Unsuccessful change of seats in the hall."
    );
    expect(cinema.swapSeatsInHall({}, 1)).to.be.equal(
      "Unsuccessful change of seats in the hall."
    );
    expect(cinema.swapSeatsInHall(1, {})).to.be.equal(
      "Unsuccessful change of seats in the hall."
    );
    expect(cinema.swapSeatsInHall(1, [])).to.be.equal(
      "Unsuccessful change of seats in the hall."
    );
    expect(cinema.swapSeatsInHall([], 1)).to.be.equal(
      "Unsuccessful change of seats in the hall."
    );
    expect(cinema.swapSeatsInHall(1, 21)).to.be.equal(
      "Unsuccessful change of seats in the hall."
    );
    expect(cinema.swapSeatsInHall(21, 1)).to.be.equal(
      "Unsuccessful change of seats in the hall."
    );
    expect(cinema.swapSeatsInHall(0, 1)).to.be.equal(
      "Unsuccessful change of seats in the hall."
    );
    expect(cinema.swapSeatsInHall(1, 0)).to.be.equal(
      "Unsuccessful change of seats in the hall."
    );
    expect(cinema.swapSeatsInHall(-1, 1)).to.be.equal(
      "Unsuccessful change of seats in the hall."
    );
    expect(cinema.swapSeatsInHall(1, -1)).to.be.equal(
      "Unsuccessful change of seats in the hall."
    );
    expect(cinema.swapSeatsInHall(1, undefined)).to.be.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(undefined, 1)).to.be.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(NaN, 1)).to.be.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(1, NaN)).to.be.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(1, null)).to.be.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(null, 1)).to.be.equal(
        "Unsuccessful change of seats in the hall."
      );

  });

  it("Valid input", () => {
    expect(cinema.swapSeatsInHall(1, 4)).to.be.equal(
      "Successful change of seats in the hall."
    );
    expect(cinema.swapSeatsInHall(1, 20)).to.be.equal(
        "Successful change of seats in the hall."
      );
  });
});
