const { addEvent, getAllEvent, getEventById ,updateEventById, deleteEventById } = require("../handlers/eventHandler.js");
const { addKategori, getAllKategori, getKategoriById, deleteKategoriById, updateKategoriById } = require("../handlers/kategoriHandler.js");
const { getAllPeserta, getPesertaById, addPeserta } = require("../handlers/pesertaHandler.js");
const { addUsers, get } = require("../handlers/usersHandler.js");

const routes = [
    {
        method: 'POST',
        path: '/users',
        handler: addUsers
    },
    {
        method: 'GET',
        path: '/users',
        handler: get
    },
    // KATEGORI
    {
        method: 'POST',
        path: '/kategori',
        handler: addKategori
    },
    {
        method: 'GET',
        path: '/kategori',
        handler: getAllKategori
    },
    {
        method: 'GET',
        path: '/kategori/{id}',
        handler: getKategoriById
    },
    {
        method: 'DELETE',
        path: '/kategori/{id}',
        handler: deleteKategoriById
    },
    {
        method: 'PUT',
        path: '/kategori/{id}',
        handler: updateKategoriById
    },

    // EVENT
    {
        method: 'POST',
        path: '/event',
        handler: addEvent
    },
    {
        method: 'GET',
        path: '/event',
        handler: getAllEvent
    },

    {
        method: 'GET',
        path: '/event/{id}',
        handler: getEventById
    },
    {
        method: 'DELETE',
        path: '/event/{id}',
        handler: deleteEventById
    },
    {
        method: 'PUT',
        path: '/event/{id}',
        handler: updateEventById
    },

    {
        method: 'GET',
        path: '/event/{id}/peserta',
        handler: getAllPeserta
    },

    {
        method: 'POST',
        path: '/event/{idEvent}/peserta',
        handler: addPeserta
    },

    {
        method: 'GET',
        path: '/tugas',
        handler: function (request, h) {
            return h.file('tugas.html');
        }
    },
    {
        method: 'GET',
        path: '/tugas.js',
        handler: function (request, h) {
            return h.file('tugas.js');
        }
    }

]

module.exports = routes;