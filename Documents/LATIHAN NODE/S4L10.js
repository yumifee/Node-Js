const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
yargs.version('1.1.0')

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

yargs.parse()