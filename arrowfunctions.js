// Print odd numbers
let oddnumbers =(Array1) => {
    for(var i=0;i<Array1.length;i++) {
        if(Array1[i] % 2 !== 0 ) {
            console.log(Array1[i]);
        }
    }
}
oddnumbers([1,2,3,4,5,6,7,8,9]);

//to change to uppercase

let Array2 =['fruits','flowers','herbs'];

let result = (values) => values.toUpperCase();

console.log(Array2.map(result));

//sum of all numbers in Array

Array3 =[1,2,3,4,5,6,7,8];

let values = (previousvalue,currentvalue) =>previousvalue + currentvalue;

console.log(Array3.reduce(values));

// prime numbers

let primenumbers = array => {
    for (let value of array) {
        let factors = 0;

        for (let divisor = 2; divisor < value; divisor++){
            if (value % divisor == 0) {
                factors++;
            }
        }

        if (factors == 0 && value!=1) {
            console.log(`${value} is a prime`);
        } else {
            console.log(`${value} is not a prime`);
        }
    }
}

primenumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14,15,16,17,18,19,20]);



