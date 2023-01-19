const { expect } = require("chai");
const { library } = require("./library");

describe("calcPriceOfBook chekcer", () => {
  it("Validation Inputs", () => {
    expect(() => library.calcPriceOfBook(1, "1")).to.be.throw("Invalid input");
    expect(() => library.calcPriceOfBook("a", [])).to.be.throw("Invalid input");
    expect(() => library.calcPriceOfBook([], 1)).to.be.throw("Invalid input");
    expect(() => library.calcPriceOfBook({}, 1)).to.be.throw("Invalid input");
    expect(() => library.calcPriceOfBook("a", {})).to.be.throw("Invalid input");
  });

  it("Validation Outputs", () => {
    expect(library.calcPriceOfBook("a", 1979)).to.be.equal(
      `Price of a is 10.00`
    );
    expect(library.calcPriceOfBook("a", 1980)).to.be.equal(
      `Price of a is 10.00`
    );
    expect(library.calcPriceOfBook("a", 1981)).to.be.equal(
      `Price of a is 20.00`
    );
  });
});

describe("findBook checker", () => {
  it("0 book array", () => {
    expect(() => library.findBook([], "a")).to.be.throw(
      "No books currently available"
    );
  });

  it("Valid book", () => {
    expect(library.findBook(["a"], "a")).to.be.equal(
      "We found the book you want."
    );
  });

  it("Valid book", () => {
    expect(library.findBook(["a", "b"], "b")).to.be.equal(
      "We found the book you want."
    );
  });

  it("Invalid book", () => {
    expect(library.findBook(["a", "b"], "c")).to.be.equal(
      "The book you are looking for is not here!"
    );
  });
});

describe("arrangeTheBooks checker", () => {
  it("Inavalid input", () => {
    expect(() => library.arrangeTheBooks("a")).to.be.throw("Invalid input");
    expect(() => library.arrangeTheBooks(-1)).to.be.throw("Invalid input");
    expect(() => library.arrangeTheBooks([])).to.be.throw("Invalid input");
    expect(() => library.arrangeTheBooks({})).to.be.throw("Invalid input");
    expect(() => library.arrangeTheBooks(undefined)).to.be.throw(
      "Invalid input"
    );
  });

  it("Equal or less book on shelves", () => {
    expect(library.arrangeTheBooks(39)).to.be.equal(
      "Great job, the books are arranged."
    );
    expect(library.arrangeTheBooks(40)).to.be.equal(
      "Great job, the books are arranged."
    );
  });

  it("More than shelves", () => {
    expect(library.arrangeTheBooks(41)).to.be.equal(
      "Insufficient space, more shelves need to be purchased."
    );
  });
});
