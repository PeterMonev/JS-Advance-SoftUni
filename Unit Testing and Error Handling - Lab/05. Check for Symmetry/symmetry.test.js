const { expect } = require("chai");
const { isSymmetric } = require("./symmetry");

describe("Symmetric Cheker", () => {
  it("work with symmetic numeric array", () => {
    expect(isSymmetric([1, 2, 2, 1])).to.be.true;
  });

  it("return false on non-symmetric array", () => {
    expect(isSymmetric([1, 2, 3])).to.be.false;
  });

  it("retur for from non-array", () => {
    expect(isSymmetric(5)).to.be.false;
  });
  
  it('retur false whet one is string', () => {
    expect(isSymmetric([1,2,'1'])).to.be.false;
  })

  it('symmetric string array', () => {
    expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
  })

});
