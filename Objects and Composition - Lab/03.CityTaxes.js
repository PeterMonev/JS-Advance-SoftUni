function cityTaxes(name,population,treasury) {
    'use strict';
    
    const obj = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,

        collectTaxes(){
            this.treasury += Math.floor(this.population) * Math.floor(this.taxRate);
        },
        applyGrowth(percent) {
           this.population += Math.floor(this.population * percent / 100);
        },
        applyRecession(percent){
            this.treasury -= Math.floor(this.treasury * percent / 100);
        }
    };

    return obj;
}
const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
