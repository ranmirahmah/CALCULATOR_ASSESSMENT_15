// 29-03-2023 
// minimum and maximum 

let animal = ['Dog', 'Goat', 'Cow', 'Fish', 'Aparo', 'rabbit'];

let number = [2,5,7,9,3,5,6];

console.log(animal.sort());
console.log(number.sort());
console.log(Math.min.apply(null, number));
console.log(Math.min(...number));
console.log(Math.max.apply(null, number));
console.log(Math.max(...number));

// remove and add 

console.log(animal);
animal.push('elephant');
console.log(animal.push());

console.log(animal);
animal.pop();
console.log(animal);

// animal.shift

animal.shift()
console.log(animal);

animal.unshift('rat');
console.log(animal);

// Exercise

// animal.includes('Lion');
console.log(animal.includes('lion'));

// uppercase
animal.forEach(function(item){
    console.log(item.toUpperCase());
})
animal.forEach(function(item){
    console.log(item.toUpperCase());
})

// SPLICE
const arr = [2,5,7,8,4,3,6,8,6,5,6,7]
// arr.splice(3,4);
// console.log(arr);

//SPLICE SUBTRACT
arr.splice(2,8);
console.log(arr);

// SPLICE ADD
// arr.splice(2,0,1,1,1,1,1,1,1,1,1);
// console.log(arr);


const date = "29-03-2023T12:25:54";

const date1 = date.split("T")[0];
const date2 = date.split("T")[1];

console.log(date1.replaceAll("-", "/"));

