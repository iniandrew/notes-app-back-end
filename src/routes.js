const { getAllNotesHandler, getNoteByIdHandler,addNoteHandler } = require('./handler');

const routes = [
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    }
];

module.exports = routes;