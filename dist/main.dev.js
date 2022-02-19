"use strict";

var n = 10;
var m = 10;
Sumcol = [];
var A = new Array(n);

for (var row = 0; row < A.length; row++) {
  A[row] = new Array(m);

  for (var col = 0; col < A[row].length; col++) {
    A[row][col] = Math.floor(Math.random() * 41) - 20;
    document.write(A[row][col] + ' ');
  }

  document.write('<br>');
} // Прошлый вариант со звездочкой 

/*for (let row=0; row<A.length; row++){
    Sum = 0;      
    for (let col=0; col<A[row].length; col++) {
        Sum += A[col][row]; //Сумма колонок 
    }

    for (let k=0; k<A[row].length; k++) {  //двумерные массивы это боль)))
        if (Sum < 0 ) {
            A[k][row]='*'; 
        }
    }
}*/


for (var _col = 0; _col < A.length; _col++) {
  Sum = 0;

  for (var _row = 0; _row < A[_col].length; _row++) {
    Sum += A[_row][_col]; //Сумма колонок 
  }

  Sumcol.push(Sum);
  console.log(Sumcol);
}

for (var k = A.length - 1; k >= 0; k--) {
  for (var _row2 = 0; _row2 < A.length; _row2++) {
    if (Sumcol[k] < 0) {
      console.log(Sumcol[k]);

      A[_row2].splice(k, 1);
    }
  }
}

console.log(A);
document.write('<br>');

for (var _row3 = 0; _row3 < A.length; _row3++) {
  for (var _col2 = 0; _col2 < A[_row3].length; _col2++) {
    document.write(A[_row3][_col2] + ' ');
  }

  document.write('<br>');
}