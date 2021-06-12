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
            dataEvent = await connection.awaitQuery(`SELECT judul, urlEvent, tanggal, urlImage from events where id=${newPeserta.idEvent}`);

            var d = dataEvent[0].tanggal;
            d = new Date(d.getTime() - 3000000);
            var date_format_str = d.getFullYear().toString() + ((d.getMonth() + 1).toString().length == 2 ? (d.getMonth() + 1).toString() : "0" + 
            (d.getMonth() + 1).toString()) + (d.getDate().toString().length == 2 ? d.getDate().toString() : "0" + d.getDate().toString()) + "T" + 
            (d.getHours().toString().length == 2 ? d.getHours().toString() : "0" + d.getHours().toString()) + ((parseInt(d.getMinutes() / 5) * 
            5).toString().length == 2 ? (parseInt(d.getMinutes() / 5) * 5).toString() : "0" + (parseInt(d.getMinutes() / 5) * 5).toString()) + "00Z";
            
            sendEmail(newPeserta.nama, newPeserta.email, dataEvent[0].urlImage, dataEvent[0].judul, dataEvent[0].tanggal, dataEvent[0].urlEvent, date_format_str);
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