function evenPositionElements(arr){
  'use strict';
   const evenPosiniton = [];

   for(let i=0; i<arr.length; i+= 2){
       
        evenPosiniton.push(arr[i]);
    
   }
   
   console.log(evenPosiniton.join(' '));

}
evenPositionElements(['20', '30', '40', '50', '60']);