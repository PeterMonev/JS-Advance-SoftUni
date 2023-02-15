function squareOfStars(n){
   'use strict';
   const star = '* ';

   for(let i = 0;i < n;i++){
    console.log(star.repeat(n).trim());
   }

}
squareOfStars(5);