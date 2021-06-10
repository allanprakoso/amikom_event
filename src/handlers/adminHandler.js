const connection = require("../models/db_connection");

// TODO

const countEvent = async (request, h) => {

    const countKategori = await connection.awaitQuery(`
        SELECT kategori.id, kategori.nama as kategori, 
        COUNT(events.id) as \`jumlah event\` from kategori 
        inner join events on events.idKategori = kategori.id 
        GROUP BY kategori.id, kategori.nama`)

    const allEvent = await connection.awaitQuery(`
    SELECT COUNT(id) as jml from events`)

    const countAll = {
        "allEvent": allEvent[0].jml,
        "kategori": countKategori
    }

    return h.response(countAll);
}

const getDataVisitor = async (request, h) => {
    const countVisitor = await connection.awaitQuery(`
    SELECT DISTINCT CAST(datetime as DATE) as tanggal , COUNT(ip) as visitor FROM 
    \`visitor\` GROUP BY tanggal ORDER BY tanggal DESC LIMIT 7`)

    return h.response(countVisitor)
}

const postDataVisitor = async (request, h) => {
    const { ip, country} = request.payload;

    const visitor = {
        ip: ip,
        country: country
    }
    try {
        await connection.awaitQuery(`INSERT INTO visitor SET ?`, visitor);
    }
    catch {

    }

    return h.response();
}

const getAllParticipants = async (request, h) => {
    return h.response(await connection.awaitQuery(`SELECT DISTINCT email, nama FROM peserta`))
}


module.exports = { countEvent, getDataVisitor, postDataVisitor, getAllParticipants }