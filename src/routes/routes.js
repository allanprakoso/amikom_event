const { countEvent, getDataVisitor, postDataVisitor, getAllParticipants } = require("../handlers/adminHandler.js");
const getAuth = require("../handlers/auth.js");
const { addEvent, getAllEvent, getEventById ,updateEventById, deleteEventById, getTop3 } = require("../handlers/eventHandler.js");
const { addKategori, getAllKategori, getKategoriById, deleteKategoriById, updateKategoriById } = require("../handlers/kategoriHandler.js");
const { getAllPeserta, getPesertaById, addPeserta } = require("../handlers/pesertaHandler.js");
const { addUsers, get } = require("../handlers/usersHandler.js");

const routes = [

    // KATEGORI
    {
        method: 'POST',
        path: '/admin/kategori',
        handler: addKategori
    },
    {
        method: 'GET',
        path: '/admin/kategori',
        handler: getAllKategori
    },
    {
        method: 'GET',
        path: '/admin/kategori/{id}',
        handler: getKategoriById
    },
    {
        method: 'DELETE',
        path: '/admin/kategori/{id}',
        handler: deleteKategoriById
    },
    {
        method: 'PUT',
        path: '/admin/kategori/{id}',
        handler: updateKategoriById
    },

    // EVENT

    {
        method: 'GET',
        path: '/event',
        handler: getAllEvent
    },
    {
        method: 'GET',
        path: '/event/top3',
        handler: getTop3
    },
    {
        method: 'GET',
        path: '/event/{id}',
        handler: getEventById
    },

    {
        method: 'GET',
        path: '/admin/event/{id}',
        handler: getEventById
    },

    {
        method: 'POST',
        path: '/admin/event',
        handler: addEvent
    },
    {
        method: 'GET',
        path: '/{admin}/event',
        handler: getAllEvent
    },

    {
        method: 'DELETE',
        path: '/admin/event/{id}',
        handler: deleteEventById
    },
    {
        method: 'PUT',
        path: '/admin/event/{id}',
        handler: updateEventById
    },

    // Peserta
    {
        method: 'GET',
        path: '/admin/event/{id}/peserta',
        handler: getPesertaById
    },

    {
        method: 'POST',
        path: '/event/{idEvent}/peserta',
        handler: addPeserta
    },
    {
        method: 'GET',
        path: '/api-doc',
        handler: function (request, h) {
            return h.file('apidoc.html');
        }
    },
    {
        method: 'GET',
        path: '/apidoc.js',
        handler: function (request, h) {
            return h.file('apidoc.js');
        }
    },

    // ADMIN
    {
        method: 'GET',
        path: '/admin/data',
        handler: countEvent
    },
    {
        method: 'GET',
        path: '/admin/data/visitor',
        handler: getDataVisitor
    },
    {
        method: 'POST',
        path: '/admin/data/visitor',
        handler: postDataVisitor
    },
    {
        method: 'GET',
        path: '/admin/data/participans',
        handler: getAllParticipants
    },

    // Auth
    {
        method: 'GET',
        path: '/auth',
        handler: getAuth
    }

]

module.exports = routes