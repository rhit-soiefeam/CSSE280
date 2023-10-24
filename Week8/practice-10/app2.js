const chalk = require('chalk');
const getNotes = require('./notes.js');
const msg = getNotes();
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

const validator = require('validator');
console.log(validator.isEmail('olga@example.com'));
console.log(validator.isEmail('example.com'));
console.log(validator.isURL('example.com'));

const chalk = require('chalk');
const success = chalk.green('success');
const failure = chalk.red.bold('failure');
console.log(success, ' and ', failure);

