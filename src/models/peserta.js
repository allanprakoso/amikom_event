const sendEmail = require("../email");
const connection = require("./db_connection");

const Peserta = function (peserta) {
    this.id = peserta.id;
    this.nama = peserta.nama;
    this.email = peserta.email;
    this.notelp = peserta.notelp;
    this.gender = peserta.gender;
    this.idEvent = peserta.idEvent;
}

Peserta.create = async (newPeserta) => {
    try {
        let result = await connection.awaitQuery(`INSERT INTO peserta SET ?`, newPeserta);

        if (result.insertId !== undefined) {
            dataEvent = await connection.awaitQuery(`SELECT judul, urlImage, urlEvent, DATE_FORMAT(CAST(tanggal as DATE), "%a, %d %b") AS date, DATE_FORMAT(CAST(tanggal as TIME), "%H.%i") AS time FROM \`events\` WHERE id=${newPeserta.idEvent}`);
            sendEmail(newPeserta.nama, newPeserta.email, dataEvent[0].urlImage, dataEvent[0].judul, dataEvent[0].date, dataEvent[0].time, dataEvent[0].urlEvent);
        }
        return result.insertId;
    } catch (error) {
        return 0;
    }
}

Peserta.getall = async () => {
    let result = await connection.awaitQuery(`SELECT * FROM peserta`);
    return result;
}

Peserta.getById = async (id) => {
    let result = await connection.awaitQuery(`SELECT * FROM peserta where idEvent=${id}`);
    return result;
}
module.exports = Peserta;