const connection = require("./db_connection");

const Peserta = function (peserta) {
    this.id = peserta.id;
    this.nama = peserta.nama;
    this.email = peserta.email;
    this.notelp = peserta.notelp;
    this.gender = peserta.gender;
    this.idEvent = peserta.idEvent;
}

Peserta.create = async (newEvent) => {
    try {
        let result = await connection.awaitQuery(`INSERT INTO peserta SET ?`, newEvent);
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