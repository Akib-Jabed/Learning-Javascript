const yargs = require('yargs');
const notes = require('./notes');

yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            description: 'Note body',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    },
});

yargs.command({
    command: 'remove',
    description: 'Remove a new note',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        notes.removeNote(argv.title);
    },
});

yargs.command({
    command: 'read',
    description: 'Read a new note',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        notes.readNote(argv.title);
    },
});

yargs.command({
    command: 'list',
    description: 'List all notes',
    handler() {
        notes.getNotes();
    },
});

yargs.parse();
