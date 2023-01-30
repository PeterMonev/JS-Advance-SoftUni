const { expect } = require("chai");
const { bookSelection } = require("./bookSelection");

describe("isGenreSuitable", () => {
  it("Happy path", () => {
    expect(bookSelection.isGenreSuitable("Thriller", 13)).to.be.equal(
      `Those books are suitable`
    );
  });

  it("Happy path", () => {
    expect(bookSelection.isGenreSuitable("Horror", 13)).to.be.equal(
      `Those books are suitable`
    );
  });

  it("Not for children Horror", () => {
    expect(bookSelection.isGenreSuitable("Horror", 10)).to.be.equal(
      `Books with Horror genre are not suitable for kids at 10 age`
    );
  });

  it("Not for children Thriller", () => {
    expect(bookSelection.isGenreSuitable("Thriller", 10)).to.be.equal(
      `Books with Thriller genre are not suitable for kids at 10 age`
    );
  });

  it("Not for children Thriller equal 12", () => {
    expect(bookSelection.isGenreSuitable("Thriller", 12)).to.be.equal(
      `Books with Thriller genre are not suitable for kids at 12 age`
    );
  });

  it("Not for children Horror equal 12", () => {
    expect(bookSelection.isGenreSuitable("Horror", 12)).to.be.equal(
      `Books with Horror genre are not suitable for kids at 12 age`
    );
  });

  it("Not for children Another equal 12", () => {
    expect(bookSelection.isGenreSuitable("Hitler", 12)).to.be.equal(
      `Those books are suitable`
    );
  });

  it("Not for children Another under 10", () => {
    expect(bookSelection.isGenreSuitable("Hitler", 10)).to.be.equal(
      `Those books are suitable`
    );
  });

  it("Not for children Another under 21", () => {
    expect(bookSelection.isGenreSuitable("Hitler", 21)).to.be.equal(
      `Those books are suitable`
    );
  });
});

describe("isItAffordable", () => {
  it("It's can't buy a book", () => {
    expect(bookSelection.isItAffordable(10, 5)).to.be.equal(
      "You don't have enough money"
    );
  });

  it("It's can't buy a book with floating point", () => {
    expect(bookSelection.isItAffordable(5.5, 5)).to.be.equal(
      "You don't have enough money"
    );
  });

  it("It's can buy a book with zero budget", () => {
    expect(bookSelection.isItAffordable(10, 10)).to.be.equal(
      `Book bought. You have 0$ left`
    );
  });

  it("It's can buy a book with zero budget with floating point", () => {
    expect(bookSelection.isItAffordable(1.0, 1.0)).to.be.equal(
      `Book bought. You have 0$ left`
    );
  });

  it("It's can buy a book with rest 5 budget", () => {
    expect(bookSelection.isItAffordable(5, 10)).to.be.equal(
      `Book bought. You have 5$ left`
    );
  });

  it("It's can buy a book with rest 5 budget wtih floating point", () => {
    expect(bookSelection.isItAffordable(5.5, 10.5)).to.be.equal(
      `Book bought. You have 5$ left`
    );
  });

  it("It's params is not number", () => {
    expect(() => bookSelection.isItAffordable("5", 10)).to.be.throw();
    expect(() => bookSelection.isItAffordable("5", "10")).to.be.throw();
    expect(() => bookSelection.isItAffordable("5", "10")).to.be.throw();
    expect(() => bookSelection.isItAffordable("a", "d")).to.be.throw();
    expect(() => bookSelection.isItAffordable(5, "10d")).to.be.throw();
  });

  it("It's params is not number", () => {
    expect(() => bookSelection.isItAffordable([], 10)).to.be.throw();
    expect(() => bookSelection.isItAffordable(10, [])).to.be.throw();
    expect(() => bookSelection.isItAffordable(10, undefined)).to.be.throw();
    expect(() => bookSelection.isItAffordable(undefined, 10)).to.be.throw();
    expect(() =>
      bookSelection.isItAffordable(undefined, undefined)
    ).to.be.throw();
    expect(() => bookSelection.isItAffordable(1, null)).to.be.throw();
    expect(() => bookSelection.isItAffordable(null, 1)).to.be.throw();
  });
});

describe("suitableTitles", () => {
  it("happy path,single match", () => {
    expect(
      bookSelection.suitableTitles(
        [
          {
            title: "aa",
            genre: "a",
          },
        ],
        "a"
      )
    ).to.deep.equal(["aa"]);
  });

  it("happy path,two matches", () => {
    expect(
      bookSelection.suitableTitles(
        [
          {
            title: "aa",
            genre: "a",
          },
          {
            title: "ab",
            genre: "a",
          },
          {
            title: "bb",
            genre: "b",
          },
        ],
        "a"
      )
    ).to.deep.equal(["aa", "ab"]);
  });

  it('happy path,with on macth',()=>{
    expect(bookSelection.suitableTitles([{
        title: 'bb',
        genre: 'b'
    }],'a')).to.deep.equal([])
 })

  it('ivalid inptut',()=>{
    expect(() => bookSelection.suitableTitles('aab','b')).to.throw()
  })
});
