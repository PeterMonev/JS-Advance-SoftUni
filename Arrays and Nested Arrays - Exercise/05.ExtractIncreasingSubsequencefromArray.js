function extractIncreasingSubSeq(array) {
    "use strict";
     const result = [];
     let biggestNum = Number.MIN_SAFE_INTEGER;

     for(let el of array) {
   
        if(el >= biggestNum){
            biggestNum = el;
            result.push(el);
        }
  
     }
  
     return result;
  }
extractIncreasingSubSeq([1, 3, 8, 4, 10, 12, 3, 2, 24]);
