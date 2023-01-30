function calorieObject(input){
  'use strict';

  const products = {};

  for(let i=0; i<input.length; i+=2){
     let product = input[i];
     let calories = Number(input[i+1]);
     products[product] = calories;
     
  }
  return products;
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);