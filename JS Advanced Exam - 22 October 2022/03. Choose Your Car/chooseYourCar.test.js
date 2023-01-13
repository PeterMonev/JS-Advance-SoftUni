const { expect } = require('chai');
const { chooseYourCar } = require('./task');

describe('choosingType ',()=>{
    it('Inv year',()=>{
        expect(()=>chooseYourCar.choosingType('a','a',1899)).to.be.throw("Invalid Year!")
    })
  
    it('Inv year',()=>{
        expect(()=>chooseYourCar.choosingType('a','a',2023)).to.be.throw("Invalid Year!")
    })
   
    it('Inv type',()=>{
        expect(()=>chooseYourCar.choosingType('a','a',2022)).to.be.throw("This type of car is not what you are looking for.")
    })

    it('valid',()=>{
        expect(chooseYourCar.choosingType('Sedan','a',2010)).to.be.equal("This a Sedan meets the requirements, that you have.")
    })

    it('valid',()=>{
        expect(chooseYourCar.choosingType('Sedan','a',2011)).to.be.equal("This a Sedan meets the requirements, that you have.")
    })

    it('valid',()=>{
        expect(chooseYourCar.choosingType('Sedan','a',2001)).to.be.equal("This Sedan is too old for you, especially with that a color.")
    })
})


describe('Brandanme',()=>{
    it('valid array',()=>{
        expect(chooseYourCar.brandName(['a','b','c'],1)).to.be.equal('a, c')
    })

    it('invalid',()=>{
        expect(()=> chooseYourCar.brandName('a',1)).to.be.throw("Invalid Information!")
    })

    
    it('invalid',()=>{
        expect(()=> chooseYourCar.brandName(['a'],5)).to.be.throw("Invalid Information!")
    })

    it('invalid',()=>{
        expect(()=> chooseYourCar.brandName(['a'],'5')).to.be.throw("Invalid Information!")
    })

    it('invalid',()=>{
        expect(()=> chooseYourCar.brandName({},1)).to.be.throw("Invalid Information!")
    })

    it('invalid',()=>{
        expect(()=> chooseYourCar.brandName(1,{})).to.be.throw("Invalid Information!")
    })

    it('invalid',()=>{
        expect(()=> chooseYourCar.brandName(['a'],-1)).to.be.throw("Invalid Information!")
    })

    it('invalid',()=>{
        expect(()=> chooseYourCar.brandName(['a'],undefined)).to.be.throw("Invalid Information!")
    })

    it('invalid',()=>{
        expect(()=> chooseYourCar.brandName(['a'],NaN)).to.be.throw("Invalid Information!")
    })

    it('invalid',()=>{
        expect(()=> chooseYourCar.brandName(['a'],null)).to.be.throw("Invalid Information!")
    })

    it('invalid',()=>{
        expect(()=> chooseYourCar.brandName(undefined,1)).to.be.throw("Invalid Information!")
    })

    
    it('invalid',()=>{
        expect(()=> chooseYourCar.brandName(null,1)).to.be.throw("Invalid Information!")
    })

    it('invalid',()=>{
        expect(()=> chooseYourCar.brandName(NaN,1)).to.be.throw("Invalid Information!")
    })
})

describe('carFuelConsumption',()=>{
    it('valid',()=>{
        expect(chooseYourCar.carFuelConsumption(100,7)).to.be.equal("The car is efficient enough, it burns 7.00 liters/100 km.")
    })

    it('valid',()=>{
        expect(chooseYourCar.carFuelConsumption(100,6)).to.be.equal("The car is efficient enough, it burns 6.00 liters/100 km.")
    })

    it('valid',()=>{
        expect(chooseYourCar.carFuelConsumption(100,8)).to.be.equal("The car burns too much fuel - 8.00 liters!")
    })

    it('invalid',()=>{
        expect(()=> chooseYourCar.carFuelConsumption('a',1)).to.be.throw("Invalid Information!")
        expect(()=> chooseYourCar.carFuelConsumption(1,'a')).to.be.throw("Invalid Information!")
        expect(()=> chooseYourCar.carFuelConsumption({},1)).to.be.throw("Invalid Information!")
        expect(()=> chooseYourCar.carFuelConsumption(1,{})).to.be.throw("Invalid Information!")
        expect(()=> chooseYourCar.carFuelConsumption('a','a')).to.be.throw("Invalid Information!")
        expect(()=> chooseYourCar.carFuelConsumption(-1,-1)).to.be.throw("Invalid Information!")
        expect(()=> chooseYourCar.carFuelConsumption(0,-1)).to.be.throw("Invalid Information!")
        expect(()=> chooseYourCar.carFuelConsumption(-1,0)).to.be.throw("Invalid Information!")
    })
})