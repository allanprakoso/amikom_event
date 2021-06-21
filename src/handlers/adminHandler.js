const connection = require("../models/db_connection");

// TODO

const countEvent = async (request, h) => {

    const Workshop = await connection.awaitQuery('SELECT count(id) as jml from events where idKategori=1');
    const Webinar = await connection.awaitQuery('SELECT count(id) as jml from events where idKategori=2');
    const Bootcamp = await connection.awaitQuery('SELECT count(id) as jml from events where idKategori=3');
    const allEvent = await connection.awaitQuery(`SELECT COUNT(id) as jml from events`)
    const countVisitor = await connection.awaitQuery(`
    SELECT DISTINCT DATE_FORMAT(CAST(datetime as DATE), \"%a\") AS day , 
    COUNT(ip) as visitor FROM \`visitor\` GROUP BY day ORDER BY day DESC LIMIT 7;`)

    const countAll = {
        "allEvent": {jumlah: allEvent[0].jml, persentase : 100},
        "workshop": {jumlah: Workshop[0].jml, persentase : Number(Workshop[0].jml)/Number(allEvent[0].jml)*100},
        "webinar":  {jumlah: Webinar[0].jml, persentase : Number(Webinar[0].jml)/Number(allEvent[0].jml)*100},
        "bootcamp": {jumlah: Bootcamp[0].jml, persentase : Number(Bootcamp[0].jml)/Number(allEvent[0].jml)*100},
        "visitors": countVisitor
    }

    return h.response(countAll);
}

const getDataVisitor = async (request, h) => {
    const countVisitor = await connection.awaitQuery(`
    SELECT DISTINCT DATE_FORMAT(CAST(datetime as DATE), \"%a\") AS day , 
    COUNT(ip) as visitor FROM \`visitor\` GROUP BY day ORDER BY day DESC LIMIT 7;`)
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