const fs = require('fs');
const notes = require('./notes.js')
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);
// console.log(bookJSON.title);
// const bookParsed = JSON.parse(bookJSON);
// console.log(bookParsed.title);
// fs.writeFileSync('1-json.json, bookJSON');
// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// console.log(dataJSON);
// const data = JSON.parse(dataBuffer);
// console.log(data);
// console.log(dataBuffer);
const dataBuffer = fs.readFileSync('data.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.name, data.city);

data.name = "Olga";
data.city = "Terre Haute";
const updateDataJSON = JSON.stringify(data);
fs.writeFileSync('data.json', updateDataJSON);
const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e) {
        return []
    }
}
const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(saveNotes);
    fs.writeFileSync('notes,json', dataJSON);
}
const addNote = function(title, body) {
    const notes = loadNotes();
    //console.log(notes)
    notes.push({
        title: title ,
        body: body
    })
    saveNotes(notes);
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote
}
handler = function (argv) {
    notes.addNote(argv.title, argv.body)
}
yargs.parse();
//node app.js add --title="Buy" --body="Note body here"