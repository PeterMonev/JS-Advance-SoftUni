const { expect } = require("chai");
const { rgbToHexColor } = require("./rgbToHex");

describe("Coler Checker", () => {
  it("Validate black color", () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
  });

  it("Validate white color", () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
  });

  it("Missing params", () => {
    expect(rgbToHexColor(0, 0)).to.be.undefined;
    expect(rgbToHexColor(0)).to.be.undefined;
    expect(rgbToHexColor()).to.be.undefined;
  });

  it("return undefined", () => {
    expect(rgbToHexColor(-1, 0.0)).to.be.undefined;
    expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
  });

  it("return undefined", () => {
    expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
  });
});
