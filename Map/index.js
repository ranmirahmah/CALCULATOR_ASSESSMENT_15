const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const multiplyBy = numbers.map((number) => {
    return number * 5
})

console.log(multiplyBy);

const notUpTo = multiplyBy.filter((num) => {
    return num < 20
})
console.log(notUpTo);