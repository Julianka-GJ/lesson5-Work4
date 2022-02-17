"use strict";

//for (let row=0; row<A.length; row++){
// Sum = 0;
//for (let col=0; col<A[row].length; col++) {
//  Sum += A[col][row];
//}
//SumCol.push(Sum);
//}
document.write('<br>');
document.write(SumCol + ' ');

for (var col = 0; col < A.length; col++) {
  Sum = 0;

  for (var row = 0; row < A[col].length; row++) {
    Sum += A[row][col];
  }

  if (Sum < 5) {
    for (var k = 0; k < A.length - 1; k++) {
      A.splice(k, 1);
      console.log(A);
    }
  }

  SumCol.push(Sum);
}

document.write('<br>');
document.write(SumCol + ' '); //Проверка и удаление 

for (var i = 0; i < A.length; i++) {
  for (var j = 0; j < A[i].length; j++) {
    document.write(A[i][j] + ' ');
  }

  document.write('<br>');
}

for (var _col = 0; _col < A.length; _col++) {
  Sum = 0;

  for (var _row = 0; _row < A[_col].length; _row++) {
    Sum += A[_col][_row];
    SumColl = Sum;
  }

  if (SumColl < 10) {
    A.splice(_col, 1);
    console.log(A);
  }
}

for (var _row2 = 0; _row2 < A.length; _row2++) {
  for (var _col2 = 0; _col2 < A[_row2].length; _col2++) {
    document.write(A[_row2][_col2] + ' ');
  }

  document.write('<br>');
}

document.write('<br>');

for (var _row3 = 0; _row3 < A.length; _row3++) {
  Sum = 0;

  for (var _col3 = 0; _col3 < A[_row3].length; _col3++) {
    Sum += A[_col3][_row3];
  }

  SumCol.push(Sum);
}

for (var _col4 = 0; _col4 < A.length; _col4++) {
  Sum = 0;

  for (var _row4 = 0; _row4 < A[_col4].length; _row4++) {
    Sum += A[_row4][_col4];
  }

  SumCol.push(Sum);

  if (Sum[_col4] < 10) {
    for (var _row5 = 0; _row5 < A[_col4].length; _row5++) {
      A[_row5].splice(_col4, 1);
    }

    console.log(A);
  }

  document.write('<br>');
}

console.log(A);
document.write(SumCol + ' ');
document.write('<br> <br>');

for (var _row6 = 0; _row6 < A.length; _row6++) {
  for (var _col5 = 0; _col5 < A[_row6].length; _col5++) {
    console.log(A[_row6][_col5]);
    document.write(A[_row6][_col5] + ' ');
  }

  document.write('<br>');
}

SumCol = [];

for (var _col6 = 0; _col6 < A.length; _col6++) {
  Sum = 0;

  for (var _row7 = 0; _row7 < A[_col6].length; _row7++) {
    Sum += A[_row7][_col6];
  }

  SumCol.push(Sum);

  if (Sum < 0) {
    for (var _k = 0; _k < A.length; _k++) {
      A[_col6][_k] = '*';
      console.log(A);
    }
  }
} // --------------------------------------------


var n = 10;
var m = 10;
var A = new Array(n);

for (var _row8 = 0; _row8 < A.length; _row8++) {
  A[_row8] = new Array(m);

  for (var _col7 = 0; _col7 < A[_row8].length; _col7++) {
    A[_row8][_col7] = Math.floor(Math.random() * 41) - 20;
    document.write(A[_row8][_col7] + ' ');
  }

  document.write('<br>');
}

for (var _row9 = 0; _row9 < A.length; _row9++) {
  Sum = 0;

  for (var _col8 = 0; _col8 < A[_row9].length; _col8++) {
    Sum += A[_col8][_row9]; //Сумма колонок 
  }

  for (var _k2 = 0; _k2 < A[_row9].length; _k2++) {
    //а вот на этом этапе у меня сломался мозг, двумерные массивы это боль)))
    if (Sum < 0) {
      A[_k2][_row9] = '*';
    }
  }
}

console.log(A);
document.write('<br>');

for (var _row10 = 0; _row10 < A.length; _row10++) {
  for (var _col9 = 0; _col9 < A[_row10].length; _col9++) {
    document.write(A[_row10][_col9] + ' ');
  }

  document.write('<br>');
}