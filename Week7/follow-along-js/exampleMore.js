const fs = require("fs");
const data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("Program Ended");

//const fs = require("fs");
//fs.readFile('input.txt', function (err, data));