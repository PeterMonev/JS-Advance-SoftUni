const { expect } = require('chai');
const { dealership } = require('./Dealership');

describe('Test functionality',()=>{
    describe('newCarCost', ()=>{
        it('should work',()=>{
            let car = 'Audi A4 B8';
            let price =20000
            assert.equal(5000, dealership.newCarCost(car,price));
        });
        it('should work',()=>{
            let car = 'Audi A4 B8';
            let price =15000
            assert.equal(0, dealership.newCarCost(car,price));
        });
        it('should work',()=>{
            let car = 'My car';
            let price =15000
            assert.equal(15000, dealership.newCarCost(car,price));
        });

    });

    describe ('carEquipment', ()=>{
        it('shoulw work carEquipment', ()=>{
            let arr = ['heated seats', 'el. window', 'my extras'];
            let indexes = [0,1];
            assert.deepEqual(['heated seats', 'el. window'], dealership.carEquipment(arr,indexes));
        });
        it('shoulw work carEquipment', ()=>{
            let arr = ['heated seats', 'el. window', 'my extras'];
            let indexes = [3,4];
            assert.deepEqual([undefined,undefined], dealership.carEquipment(arr,indexes));
        });

        it('shoulw work carEquipment', ()=>{
            let arr = [];
            let indexes = [];
            assert.deepEqual([], dealership.carEquipment(arr,indexes));
        });
    });
    describe('euro category', ()=>{
        it('euro category shoul work', ()=>{
            let mycar = 'Audi A4 B8';
            let myPrice = 30000;
            assert.equal(`We have added 5% discount to the final price: 14250.`,dealership.euroCategory(4));
        });

        it('euro category shoul work', ()=>{
            let mycar = 'Audi A4 B8';
            let myPrice = 30000;
            assert.equal('Your euro category is low, so there is no discount from the final price!',dealership.euroCategory(0));
        });
    });
});