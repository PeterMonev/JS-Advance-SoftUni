function magicMatrices(array) {
    'use strict';
     const searchingSum = array[0].reduce((a,b)=> a+b,0);

    for(let i = 0; i<array.length; i++) {
     const rowSum = array[i].reduce((a,b)=> a+b,0);
      
            let colSum = 0;
              
         for(let j = 0 ; j < array.length; j++){
            colSum += array[j][i];
            
          } 

          if(rowSum != searchingSum || colSum != searchingSum ){
            return false;
          }

    }
    return true;

}
magicMatrices([
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
]);
