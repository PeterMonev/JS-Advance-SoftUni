function pieceOfPie(array,startWord,endWord){
   'use strict';

   const startIndex = array.indexOf(startWord);
   const endIndex = array.indexOf(endWord);
   const result = array.slice(startIndex, endIndex + 1 );
   return result;

}
pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
);