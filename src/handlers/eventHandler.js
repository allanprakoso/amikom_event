const { top3 } = require("../models/event");
const Event = require("../models/event");

const addEvent = async (request, h) => {
    const { idKategori, judul, deskripsi, tanggal, urlEvent, urlImage } = request.payload;

    const newEvent = new Event({
        idKategori: idKategori,
        judul: judul,
        deskripsi: deskripsi,
        tanggal: tanggal,
        urlEvent: urlEvent,
        urlImage: urlImage
    })
    const isSuccess = await Event.create(newEvent);
    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Event berhasil ditambahkan',
            data: {
                idEvent: isSuccess,
            }
        });
        response.code(201);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'kstegori gagal ditambahkan',
    });
    response.code(500);
    return response;
}

const getAllEvent = async (request, h) => {
    const { search, upcoming, kategori } = request.query;
    const {admin} = request.params;
    const data = (admin=='admin') ? await Event.getall(null,true) : (upcoming==1) ? await Event.getall(1) : (upcoming==0) ? await Event.getall(0) : await Event.getall(); 
    eventFiltered = data;
    if (search !== undefined) {
        var cari = search.split(" ");
        var i = 0;
        var datanya = [];
        while (true) {
            try {
                var filteredData = data.filter((data) => data.judul.toLowerCase().includes(cari[i].toLowerCase())
                    || data.deskripsi.toLowerCase().includes(cari[i].toLowerCase()))
                    i++;
                if (filteredData[0] !== undefined) {
                    a = 0;
                    while (true) {
                        if (filteredData[a] !== undefined) {
                            if (datanya.indexOf(filteredData[a]) === -1) {
                                datanya.push(filteredData[a]);
                            }
                            a++;
                        } else {
                            break;
                        }
                    }
                }
            } catch {
                break;
            }
        }
        
        eventFiltered = datanya;
    }
    if (kategori !== undefined) {
        eventFiltered = eventFiltered.filter((data) => data.idKategori == kategori)
    }
    const response = h.response(eventFiltered);
    return response;
};

const getEventById = async (request, h) => {
    const { id } = request.params;
    const data = await Event.getById(id);
    const response = h.response(data[0]);
    return response;
};

const deleteEventById = async (request, h) => {
    const { id } = request.params;
    const isSuccess = await Event.deleteById(id);
    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Event berhasil dihapus',
        });
        response.code(201);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'Event gagal dihapus',
    });
    response.code(500);
    return response;
};

const updateEventById = async (request, h) => {
    const { id } = request.params;
    const { judul, deskripsi, tanggal, urlEvent, urlImage, idKategori } = request.payload;

    const editEvent = new Event({
        idKategori: idKategori,
        judul: judul,
        deskripsi: deskripsi,
        tanggal: tanggal,
        urlEvent: urlEvent,
        urlImage: urlImage
    })
    const data = await Event.updateById(editEvent, id);
    if (data != 0) {
        const response = h.response({
            status: 'success',
            message: 'Event berhasil diedit',
            data: data[0]
        });
        response.code(200);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'Event gagal diedit',
    });
    response.code(500);
    return response;
};

const getTop3 = async (request, h) =>{
    const data = await Event.top3();

    return h.response(data);
}

module.exports = { addEvent, getAllEvent, getEventById, updateEventById, deleteEventById, getTop3 };