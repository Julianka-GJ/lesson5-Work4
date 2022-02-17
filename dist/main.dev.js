"use strict";

var n = 10;
var m = 10;
var A = new Array(n);

for (var row = 0; row < A.length; row++) {
  A[row] = new Array(m);

  for (var col = 0; col < A[row].length; col++) {
    A[row][col] = Math.floor(Math.random() * 41) - 20;
    document.write(A[row][col] + ' ');
  }

  document.write('<br>');
}

for (var _row = 0; _row < A.length; _row++) {
  Sum = 0;

  for (var _col = 0; _col < A[_row].length; _col++) {
    Sum += A[_col][_row]; //Сумма колонок 
  }

  for (var k = 0; k < A[_row].length; k++) {
    //двумерные массивы это боль)))
    if (Sum < 0) {
      A[k][_row] = '*';
    }
  }
}

console.log(A);
document.write('<br>');

for (var _row2 = 0; _row2 < A.length; _row2++) {
  for (var _col2 = 0; _col2 < A[_row2].length; _col2++) {
    document.write(A[_row2][_col2] + ' ');
  }

  document.write('<br>');
}