const { expect } = require("chai");
const { rentCar } = require("./rentCar");

describe("searchCar", () => {
  it("Valid input in searchCar", () => {
    expect(() => rentCar.searchCar(1, "")).to.be.throw("Invalid input!");
  });
  it("Valid input in searchCar", () => {
    expect(() => rentCar.searchCar(1, 1)).to.be.throw("Invalid input!");
  });
  it("Valid input in searchCar", () => {
    expect(() => rentCar.searchCar("", 1)).to.be.throw("Invalid input!");
  });
  it("Valid input in searchCar", () => {
    expect(() => rentCar.searchCar("", [])).to.be.throw("Invalid input!");
  });
  it("Valid input in searchCar", () => {
    expect(() => rentCar.searchCar([], {})).to.be.throw("Invalid input!");
  });
  it("Valid input in searchCar", () => {
    expect(() => rentCar.searchCar({}, [])).to.be.throw("Invalid input!");
  });
  it("Valid input in searchCar", () => {
    expect(() => rentCar.searchCar({}, {})).to.be.throw("Invalid input!");
  });
  it("Valid input in searchCar", () => {
    expect(() => rentCar.searchCar([], [])).to.be.throw("Invalid input!");
  });
  it("Valid input in searchCar", () => {
    expect(() => rentCar.searchCar("", "")).to.be.throw("Invalid input!");
  });
  it("Valid input in searchCar", () => {
    expect(() => rentCar.searchCar(NaN, "")).to.be.throw("Invalid input!");
  });
  it("Valid input in searchCar", () => {
    expect(() => rentCar.searchCar([], NaN)).to.be.throw("Invalid input!");
  });
  it("Valid input in searchCar", () => {
    expect(() => rentCar.searchCar([], undefined)).to.be.throw(
      "Invalid input!"
    );
  });
  it("Valid input in searchCar", () => {
    expect(() => rentCar.searchCar(undefined, "")).to.be.throw(
      "Invalid input!"
    );
  });
  it("Valid input in searchCar", () => {
    expect(() => rentCar.searchCar([], null)).to.be.throw("Invalid input!");
  });
  it("Valid input in searchCar", () => {
    expect(() => rentCar.searchCar(null, "")).to.be.throw("Invalid input!");
  });
  it("With valid arguments searchCar", () => {
    expect(rentCar.searchCar(["BMW"], "BMW")).to.be.equal(
      `There is 1 car of model BMW in the catalog!`
    );
  });
  it("With valid arguments searchCar", () => {
    expect(rentCar.searchCar(["BMW", "Audi"], "BMW")).to.be.equal(
      `There is 1 car of model BMW in the catalog!`
    );
  });
  it("With valid arguments searchCar", () => {
    expect(rentCar.searchCar(["Audi", "BMW"], "BMW")).to.be.equal(
      `There is 1 car of model BMW in the catalog!`
    );
  });
  it("With No valid arguments searchCar", () => {
    expect(() => rentCar.searchCar(["Audi"], "BMW")).to.be.throw(
      "There are no such models in the catalog!"
    );
  });
  it("With No valid arguments searchCar", () => {
    expect(() => rentCar.searchCar(["Audi", "Go"], "BMW")).to.be.throw(
      "There are no such models in the catalog!"
    );
  });
  it("With No valid arguments searchCar", () => {
    expect(() => rentCar.searchCar([""], "BMW")).to.be.throw(
      "There are no such models in the catalog!"
    );
  });
});

describe("calculatePriceOfCar", () => {
  it("No Valid input", () => {
    expect(() => rentCar.calculatePriceOfCar([], 1)).to.be.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar(1, [])).to.be.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar("", [])).to.be.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar([], "")).to.be.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar({}, "")).to.be.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar("", {})).to.be.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar(1, {})).to.be.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar({}, 1)).to.be.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar(NaN, 1)).to.be.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar(1, NaN)).to.be.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar("", NaN)).to.be.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar(NaN, "")).to.be.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar(undefined, "")).to.be.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar("", undefined)).to.be.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar(1, undefined)).to.be.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar(undefined, 1)).to.be.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar(null, 1)).to.be.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar(1, null)).to.be.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar("", null)).to.be.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar(null, "")).to.be.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar("", "1")).to.be.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar(1, "")).to.be.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar("", "")).to.be.throw(
      "Invalid input!"
    );
    expect(() => rentCar.calculatePriceOfCar(1, 1)).to.be.throw(
      "Invalid input!"
    );
  });

  it("Not matching arguments", () => {
    expect(() => rentCar.calculatePriceOfCar("A", 1)).to.be.throw(
      "No such model in the catalog!"
    );
  });
  it("Not matching arguments", () => {
    expect(() => rentCar.calculatePriceOfCar("", 1)).to.be.throw(
      "No such model in the catalog!"
    );
  });
  it("Not matching arguments", () => {
    expect(() => rentCar.calculatePriceOfCar("A,A", 1)).to.be.throw(
      "No such model in the catalog!"
    );
  });

  it("Valid inputs", () => {
    expect(rentCar.calculatePriceOfCar("BMW", 1)).to.be.equal(
      `You choose BMW and it will cost $45!`
    );
  });

  it("Valid inputs", () => {
    expect(rentCar.calculatePriceOfCar("BMW", 2)).to.be.equal(
      `You choose BMW and it will cost $90!`
    );
  });
});

describe("checkBudget",()=>{
    it("Valid input in checkBudget",()=>{
    expect(()=> rentCar.checkBudget('','','')).to.be.throw("Invalid input!")
    expect(()=> rentCar.checkBudget(1,'','')).to.be.throw("Invalid input!")
    expect(()=> rentCar.checkBudget('',1,'')).to.be.throw("Invalid input!")
    expect(()=> rentCar.checkBudget('','',1)).to.be.throw("Invalid input!")
    expect(()=> rentCar.checkBudget('','',[])).to.be.throw("Invalid input!")
    expect(()=> rentCar.checkBudget('',[],'')).to.be.throw("Invalid input!")
    expect(()=> rentCar.checkBudget([],'','')).to.be.throw("Invalid input!")
    expect(()=> rentCar.checkBudget({},'','')).to.be.throw("Invalid input!")
    expect(()=> rentCar.checkBudget('',{},'')).to.be.throw("Invalid input!")
    expect(()=> rentCar.checkBudget('','',{})).to.be.throw("Invalid input!")
    expect(()=> rentCar.checkBudget('','',NaN)).to.be.throw("Invalid input!")
    expect(()=> rentCar.checkBudget('',NaN,'')).to.be.throw("Invalid input!")
    expect(()=> rentCar.checkBudget(NaN,'','')).to.be.throw("Invalid input!")
    expect(()=> rentCar.checkBudget(undefined,'','')).to.be.throw("Invalid input!")
    expect(()=> rentCar.checkBudget('',undefined,'')).to.be.throw("Invalid input!")
    expect(()=> rentCar.checkBudget('','',undefined)).to.be.throw("Invalid input!")
    expect(()=> rentCar.checkBudget('','',null)).to.be.throw("Invalid input!")
    expect(()=> rentCar.checkBudget('',null,'')).to.be.throw("Invalid input!")
    expect(()=> rentCar.checkBudget(null,'','')).to.be.throw("Invalid input!")
})
   it('With budget', ()=>{
      expect(rentCar.checkBudget(1,2,3)).to.be.equal(`You rent a car!`)
   })
   it('With budget', ()=>{
    expect(rentCar.checkBudget(1,2,2)).to.be.equal(`You rent a car!`)
 })

 it('No budget', ()=>{
    expect(rentCar.checkBudget(1,2,1)).to.be.equal('You need a bigger budget!')
 })
})
