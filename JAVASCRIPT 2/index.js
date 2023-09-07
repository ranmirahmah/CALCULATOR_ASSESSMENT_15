let number = 45;
const arr = Array()

console.log(arr);

const soup = ['maggi','palm-oil']
console.log(soup);

const list = ['goat','fowl','rabbit','cat','aparo','goat']
console.log(list);
console.log(list.length);
console.log(list[2]);
let position = list.indexOf('goat')
console.log(position);
console.log(Array.isArray(list));

// lastIndexOf
let position2 = list.lastIndexOf('goat')
console.log(position2)

// indexof
let position1 = list.indexOf('apple')
console.log(position1);

//include
console.log(list.includes("aparo"));

// isArray
const number4 = 34;
console.log(Array.isArray(number4));


const y = [6].fill('cat')
console.log(y)

console.log(list[0]);
console.log(list[1]);
console.log(list[2]);
console.log(list[3]);

// split
const learn = "REACT";
let x = learn.split("")
console.log(x);

// Array
const arr3 = Array(7).fill('coke')
console.log(arr3);

// concart
const firstArr = [1,2,3,4];
const secondArr = [5,6,7,8]
const thirdArr = [firstArr,secondArr]
console.log(thirdArr)
console.log(firstArr.concat(secondArr))

// tostring 



let itcompany = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itcompany);
console.log(itcompany.length);

console.log(itcompany[0]);
console.log(itcompany[6]);

// arr.find method

let arr5 = [1,2,3,4,5];
 let found = arr5.find(function(item, index, array){
    return item > 2;
});

console.log(found);

let names = ['Gilbert', 'John', 'Kevin', 'IBK', 'Silas'];
let found1 = arr5.find((item) => item > 2);
let foundName = names.find((item) => item === 'Kevin');

console.log(foundName);

// findIndex method

let foundIndex = arr5.findIndex((item) => item == 3);
console.log(foundIndex);

let foundRightIndex = arr5.findLastIndex((item) => item == 4);
console.log(foundRightIndex);

// arr.filter 

let newArr = arr5.filter((item) => item > 2);
console.log(newArr);

// map method 
let squaredNumbers = arr5.map((item) => item * item);
console.log(squaredNumbers);

let lengths = names.map(item => item.length);
console.log(lengths)

// sort method 
const unsortedNumbers = [2, 1, 3, 4]
// let unsort = unsortedNumbers.sort(); 
console.log(unsortedNumbers.sort());
console.log(names.sort());

// reverse method 
let reversed = arr5.reverse();
console.log(reversed);

// split method 
let str = "Gilbert John Kevin IBK Silas";
let strArr = str.split(" ");
console.log(strArr);

