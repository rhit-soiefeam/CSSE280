const chalk = require('chalk');
const getNotes = require('./notes.js');
const msg = getNotes();
const express = require('express');
const app = express();
app.use(express.json());
port = 3000;
// // console.log(msg);
// // const greenMsg = chalk.green.bold(msg);
// // console.log(greenMsg);
// // console.log(process.argv);
// // //node app.js MyName
// // console.log(process.argv[2]);
// const command = process.argv[2];
// if (command === 'add') {
//     console.log('Adding note');
// }
// // node app.js add : Adding notes
// // node app.js remove : nothing
// else if (command === 'remove') {
//     console.log('Removing note');
// }
// //--title="My first note"
// //node app.js add --title="My 1st note"
// //nodemon = nodemon run code w/o starting and stopping
// console.log(process.argv);
// console.log(yargs.argv);
app.listen(port, () => {
    console.log("Server Listening on PORT:", port);
});
app.get("/status", (request, response)  => {
    const status = {
        "Status": "Running"
    };
    response.send(status);
});
yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function() {
        console.log('Adding a new note')
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing a new note',
    handler: function() {
        console.log('Removing a new note')
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: function() {
        console.log('Listing all notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading your note',
    handler: function() {
        console.log('Reading a note')
    }
})