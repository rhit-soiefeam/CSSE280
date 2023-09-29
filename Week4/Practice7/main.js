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
const student = {name: 'John', age: 20, grade: 'A'};
for(let item in student) {
    console.log(item);
}
console.log(sum);
const book = {title: 'Harry Potter', author: 'J.K. Rowling', year: 1997};
for(let item in book) {
    console.log(book[item]);
}
const numbers1= [1, 2, 3, 4, 5];
let sum1 = 0;
for(let number of numbers1) {
    sum1 += number;
}
console.log(sum);

const temperatures = [32, 68, 75, 82, 56];
function farToCel(farTemp) {
    console.log((farTemp - 32) * 5/9);
};
console.log(temperatures.forEach(farToCel));

const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
const populations = {'New York': 8398748, 'Los Angeles': 3990456, 'Chicago': 2705994, 'Houston':2320268};
console.log(cities.forEach(elementGet));
function elementGet(aList) {
    console.log(populations[aList]);
}
for(let i = 1; i <= 5; i++) {
    currentString = "";
    for(let j = 1; j <= i; j++) {
        currentString += "*";
    }
    console.log(currentString);
}