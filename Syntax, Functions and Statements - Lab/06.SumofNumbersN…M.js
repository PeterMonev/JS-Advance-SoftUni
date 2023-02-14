function sumOfNumbersNM(n,m){
  'use strict';
  const num1 = Number(n);
  const num2 = Number(m);
  let result = 0;

  for(let i = num1;i <= num2;i++){
      result +=  i;
  }

 return console.log(result);

}
sumOfNumbersNM('1', '5' );
