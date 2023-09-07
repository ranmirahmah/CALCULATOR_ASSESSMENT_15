// const date = new Date();
// const year = date.getFullYear();

// if (year === 2023) {
//     return '2023'
// } 
// else if (year === 2024) {
//     return '2024'
// }
// else {
//     return 'year not found'
// }



for (let i=0 ; i<=10; i++) {
    let a = 2;
    let result = a*i
    console.log(`${a}= ${result}`);
}


arrName = ['shola', 'tunde', 'tope', 'kunle']
for (let name in arrName){
    console.log(name);
}

for (let name of arrName){
    console.log(name);
}

let name1 = 'afolaranmirahmat'

for (let letter of name1){
    console.log(letter);
}
for (let letter in name1){
    console.log(name1);
}
for (let letter of name1){
    console.log(name1[0]);
}

let salary = {Salami:5000, Femi:6000, Sola:7000}

for (let amount in salary){
    let finalAmount = '$' + salary[amount]
    console.log(`${amount}= ${finalAmount}`);
}

let computer = [
    {name: 'Asus' , price: 11000},
    {name: 'laptop', price: 10000}
]
// let computer2 = computer.map((i)=>{
//     return i.price
// })
// let subTotal = computer2.reduce((total, item)=> {
//     return total + item
// }, 0);


let subTotal = computer.reduce((total, item)=> {
    return total + item.price
}, 0);

console.log(subTotal);