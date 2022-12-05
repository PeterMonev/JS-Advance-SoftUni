function negativePositiveNumbers(array){
   'use strict';
   const result = [];

  for(let num of array){

    if(num >=0){
        result.push(num);
    }else {
        result.unshift(num);
    }

  }

  console.log(result.join('\n'));

}
negativePositiveNumbers([7, -2, 8, 9]);