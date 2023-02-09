function fruit(product,grams,pricePerKg){
    'use strict';
const kiloForProduct = grams / 1000;

return console.log(`I need $${(pricePerKg * kiloForProduct).toFixed(2)} to buy ${kiloForProduct.toFixed(2)} kilograms ${product}.`);

}
fruit('orange', 2500, 1.80);