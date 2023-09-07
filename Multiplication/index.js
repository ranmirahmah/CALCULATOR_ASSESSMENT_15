const multiplicationIndex = [1, 2 ,3 , 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (const i in multiplicationIndex) {
   for (let index = 0; index < multiplicationIndex.length; index++) {
    // console.log('i',i, 'index',index);
    console.log(`${i} * ${index} = ${i * index}`);
   }
}
   for (const i of multiplicationIndex) {
    for (let index = 0; index <= 12; index++) {
    //  console.log('i',i, 'index',index);
     console.log(`${i} * ${index} = ${i * index}`);
    }
}

function myFunction (a, b, c,d) {
    return a * b + c / d
}

console.log(myFunction(3, 2, 5, 4));


// let myArr = ['Luios', 'Vuitton', 'Fendi']

// function myFunction(Fendi) {
//     return 'Fendi still available. 18 stocks left'
// }

// console.log(myFunction());


