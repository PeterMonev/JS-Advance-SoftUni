function smallestTwoNumbers(array){
   'use strict';

   array.sort((a,b)=> a - b);
   console.log(array[0], array[1]);

}
smallestTwoNumbers([30, 15, 50, 5]);