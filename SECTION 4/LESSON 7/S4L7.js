const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
yargs.version('1.1.0')

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})
console.log(yargs.argv)