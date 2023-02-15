function aggragateElements(array){
  'use strict';

  const sum = array.reduce((a,b) => a + b,0);
  const inversSum = array.reduce((a,b) => a + 1 / b, 0);
  const concat = array.join('');

  console.log(sum);
  console.log(inversSum);
  console.log(concat);

}
aggragateElements([1,2,3]);