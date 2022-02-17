const n = 10;
const m = 10;

let A = new Array(n);

for (let row=0; row<A.length; row++) {
    A[row] = new Array(m);
    for (let col=0; col<A[row].length; col++) {
        A[row][col] = Math.floor(Math.random()*41)-20;
        document.write(A[row][col] + ' ');
    }
        document.write('<br>');
}


for (let row=0; row<A.length; row++){
    Sum = 0;      
    for (let col=0; col<A[row].length; col++) {
        Sum += A[col][row]; //Сумма колонок 
    }

    for (let k=0; k<A[row].length; k++) {  //двумерные массивы это боль)))
        if (Sum < 0 ) {
            A[k][row]='*'; 
        }
    }
}

console.log(A); 

document.write('<br>');


for (let row=0; row<A.length; row++){
    for (let col=0; col<A[row].length; col++) {
        document.write(A[row][col] + ' ');
}
        document.write('<br>');
}


















































