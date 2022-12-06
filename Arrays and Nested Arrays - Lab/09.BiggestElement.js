function biggestElement(matrix){
  'use strict';
   let biggestNumer = Number.NEGATIVE_INFINITY;

  for(let rows of matrix){

    for(let cols of rows){

         if(+biggestNumer <= +cols){
            biggestNumer = cols;
         }
   
        }

  }

return biggestNumer;

}
biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   );