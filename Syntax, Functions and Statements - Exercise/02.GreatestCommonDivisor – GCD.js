function greatestCommonDivisor(a,b){
    'use strict';
    
  if(b){
    return greatestCommonDivisor(b,a % b);
  } else {
    console.log(a);
  }

}
greatestCommonDivisor(15,5);