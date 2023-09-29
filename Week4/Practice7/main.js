for(let i = 2; i <= 10; i = i + 2) {
    console.log(i);
}
for(let j = 5; j >= 1; j--) {
    console.log(j);
}
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for(let number of numbers) {
    sum += number;
}
console.log(sum);
const book = {title: 'Harry Potter', author: 'J.K. Rowling', year: 1997};
for(let item in book) {
    console.log(book[item]);
}
