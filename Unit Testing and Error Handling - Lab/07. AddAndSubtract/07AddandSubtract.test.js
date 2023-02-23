const { expect } = require('chai');
const  createCalculator  = require('./07AddandSubtract');

describe('CreateCalc function checker', ()=> {
    it(`returns an object`, () => {
        expect(typeof createCalculator()).to.equals('object')
    })

    it('return obj has method add', () =>{
        expect(createCalculator().add()).to.be.true;
    })

    it(`add method adds parsable input`, () => {
        const calc = createCalculator()
        calc.add('1')
        expect(calc.get()).to.equals(1)
    })

    it('add method adds parsable input',()=> {
        const calc = createCalculator();
        calc.add('2');
        calc.subtract('1');
        expect(calc.get()).to.equal(1)
    })

})

