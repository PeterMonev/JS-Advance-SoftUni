function diagonalSums(matrix) {
  'use strict';
  let firstDiagonalSum = 0;
  let secondDiagonalSum = 0;

  for(let i = 0; i < matrix.length ; i++) {
      firstDiagonalSum += matrix[i][i];
      secondDiagonalSum += matrix[i][matrix.length - 1 - i]
  }

console.log(firstDiagonalSum+' '+secondDiagonalSum);
    
}
diagonalSums([
  [20, 40],
  [10, 60],
]);
diagonalSums([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
