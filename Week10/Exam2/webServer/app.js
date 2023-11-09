var express = require("express");
var app = express();
app.use('/', express.static("public"));
app.use('/api/', express.json());

let data = [];
// let data = [];  // or an empty array depending on the instructions for your specific exam

const fs = require("fs");
const serverSideStorage = "../data/db.json";

fs.readFile(serverSideStorage, function (err, buf) {
    if (err) {
        console.log("error: ", err);
    } else {
        data = JSON.parse(buf.toString());
    }
    console.log("Data read from file.");
});

function saveToServer(data) {
    fs.writeFile(serverSideStorage, JSON.stringify(data), function (err, buf) {
        if (err) {
            console.log("error: ", err);
        } else {
            console.log("Data saved successfully!");
        }
    })
}


// TODO: Create your backend API here:
const baseMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
/**
 * Get Months	- Gets the array of months in order
 *   method:                    GET
 *   path:                      /api/getmonths
 *   expected request body:     none
 *   side effects:              none
 *   example response:          ["January","February","March","April","May","June","July","August","September","October","November","December"]
 */

function getMonths() {
    //fetch(`/api/getmonths`)
    //.then(response => response.json())
    setMonths(baseMonths);
    return data;
}
/**
 * Move - Sets the index for one of the months
 *   method:                    PUT
 *   path:                      /api/move/:fromindex/:toindex
 *   expected request body:     none
 *   side effects:              adjusts the order of the array
 *   example response:          {"months": ["January","February","March","April","May","June","July","August","September","October","November","December"],
 *                               "moved_month": "January", 
 *                               "from_index": 0,
 *                               "to_index": 1}
*/
function move(fromIndex, toIndex) {
    // const monthMoved = data.splice(fromIndex, 1)[0]; // Does the splice and returns the month
    // data.splice(toIndex, 0, monthMoved);  // Inserts the month back into the array at the index
    // displayMonths();

}

/**
 *  Set months- Set the entire list of months using a POST body that is a JSON array.
 *    method:                    POST
 *    path:                      /api/setmonths
 *    expected request body:     JSON object, for example {"months": ["January","February","March","April","May","June","July","August","September","October","November","December"]}
 *    side effects:              saves the new array into db.json 
 *    response: ["January","February","March","April","May","June","July","August","September","October","November","December"]
 */
function setMonths(months) {
    data = months;
    console.log(months);
    saveToServer(months);
    return data;
}
app.listen(3000);
getMonths();