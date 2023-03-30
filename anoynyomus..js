// Print odd numbers odf an Array
(function (Array1) {
    for(var i=0;i<Array1.length;i++) {
        if(Array1[i] % 2 !== 0 ) {
            console.log(Array1[i]);
        }
    }
})([1,2,3,4,5,6,7,8,9])


//convert all String to Uppercase Letters in Array

let Array2 =['fruits','flowers','herbs'];

function result (values)  {
    return values.toUpperCase();
}
console.log(Array2.map(result));

// sum of all number in an Array

Array3 =[1,2,3,4,5,6,7,8];

function values (previousvalue,currentvalue) {
    return previousvalue + currentvalue;
}
console.log(Array3.reduce(values));

// prime numbers

 
((array) => {
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
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14,15,16,17,18,19,20]);

// to find is an Plaindromes:
 function check(str) {
  return str === str.split('').reverse().join('');  //if ture stored in palindromes
}

function findPalindromes(arr) {
  let palindromes = [];         
  
  for (let i = 0; i < arr.length; i++) {
    if (check(arr[i])) {
      palindromes.push(arr[i]);
    }
  }
  
  return palindromes;   //repeat condition
}

let words = ['racecar', 'banana', 'level', 'hello'];

console.log(findPalindromes(words)); // ['racecar', 'level']

//Return Median in an twpo soreted array; 

((array11,array12) => {
    len = array11.length;
    let totalarray = array11.concat(array12).sort((a,b)=>(a-b));
    let mid = Math.floor((len-1)/2);
    console.log(totalarray[mid] + totalarray[mid + 1]/2);
})([1,3,2,5,4],[7,9,6,8,10])



// To remove Duplicate values in Array 

let Numbers  = [1,2,2,3,3,4,4,5,5,5,5,6,7,8];
let entries =[...new Set(Numbers)];
console.log(entries);

//