function biggerHalf(array){
  'use strict';

  const sortedArr = array.sort((a,b)=> a - b);
  const index = sortedArr.length / 2;

  if(index % 2 === 0){
    return sortedArr.splice(index);
  } else {
    return sortedArr.splice(index);
  }

}
biggerHalf([3, 19, 14, 7, 2, 19, 6 ]);
biggerHalf([4, 7, 2, 5]);