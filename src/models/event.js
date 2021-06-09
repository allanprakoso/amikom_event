const connection = require("./db_connection");

const Event = function (event) {
    this.id = event.id;
    this.judul = event.judul;
    this.deskripsi = event.deskripsi;
    this.tanggal = event.tanggal;
    this.urlEvent = event.urlEvent;
    this.urlImage = event.urlImage;
    this.idKategori = event.idKategori;
}

Event.create = async (newEvent) => {
    try {
        let result = await connection.awaitQuery(`INSERT INTO events SET ?`, newEvent);
        return result.insertId;
    } catch (error) {
        return 0;
    }
}

Event.getall = async (param) => {
    let result
    if (param == 0) {
        console.log('past')
        result = await connection.awaitQuery(`
        SELECT events.id, events.judul, events.deskripsi, 
        events.tanggal, events.urlEvent, events.urlImage, 
        kategori.nama as kategori , events.idKategori 
        FROM events INNER JOIN kategori 
        ON events.idKategori = kategori.id WHERE 
        events.id NOT IN 
        (select id from events where tanggal > (SELECT NOW() AS DATETIME))`);
    }
    if (param == 1) {
        console.log('upcoming')
        result = await connection.awaitQuery(`
        SELECT events.id, events.judul, events.deskripsi, 
        events.tanggal, events.urlEvent, events.urlImage, 
        kategori.nama as kategori , events.idKategori 
        FROM events INNER JOIN kategori 
        ON events.idKategori = kategori.id WHERE events.tanggal > (SELECT NOW() AS DATETIME)`);
    }
    else {
        result = await connection.awaitQuery(`
    SELECT events.id, events.judul, events.deskripsi, 
    events.tanggal, events.urlEvent, events.urlImage, 
    kategori.nama as kategori , events.idKategori 
    FROM events INNER JOIN kategori 
    ON events.idKategori = kategori.id`);
    }
    return result;
}

Event.getById = async (id) => {
    console.log(id);
    let result = await connection.awaitQuery(`
    SELECT events.id, events.judul, events.deskripsi, 
    events.tanggal, events.urlEvent, events.urlImage, 
    kategori.nama as kategori , events.idKategori 
    FROM events INNER JOIN kategori 
    ON events.idKategori = kategori.id WHERE events.id=${id}`);
    return result;
}

Event.deleteById = async (id) => {
    try {
        let result = await connection.awaitQuery(`DELETE FROM events where id=${id}`);
        return result.affectedRows
    } catch (error) {
        return 0;
    }
}

Event.updateById = async (editEvent, id) => {
    try {
        await connection.awaitQuery(`UPDATE events SET judul=\'${editEvent.judul}\' , deskripsi=\'${editEvent.deskripsi}\', tanggal=\'${editEvent.tanggal}\', urlEvent=\'${editEvent.urlEvent}\', urlImage= \'${editEvent.urlImage}\' , idKategori=\'${editEvent.idKategori}\'  where id=${id}`);
        return await connection.awaitQuery(`SELECT * FROM events where id=${id}`);
    } catch (error) {
        return 0;
    }
}

module.exports = Event;

