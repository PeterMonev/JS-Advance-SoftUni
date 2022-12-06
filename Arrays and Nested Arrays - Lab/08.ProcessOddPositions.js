function processOddPosition(array){
  'use strict';
   
  return array.filter((x,i)=> i % 2).reverse().map(x => x * 2).join(' '); 

}
processOddPosition([10, 15, 20, 25]);