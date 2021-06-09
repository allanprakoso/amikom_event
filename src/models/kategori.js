const connection = require("./db_connection");

const Kategori = function (kategori) {
    this.id = kategori.id;
    this.nama = kategori.nama;
}

Kategori.create = async (newKategori) => {
    try {
        let result = await connection.awaitQuery(`INSERT INTO kategori SET ?`, newKategori);
        return result.insertId;
    } catch (error) {
        return 0;
    }
}

Kategori.getall = async () => {
    let result = await connection.awaitQuery(`SELECT * FROM kategori`);
    return result;
}

Kategori.getById = async (id) => {
    let result = await connection.awaitQuery(`SELECT * FROM kategori where id=${id}`);
    return result;
}

Kategori.updateById = async (nama, id) => {
    try {
        await connection.awaitQuery(`UPDATE kategori SET nama=\'${nama}\' where id=${id}`);
        return await connection.awaitQuery(`SELECT * FROM kategori where id=${id}`);
    } catch (error) {
        return 0;
    }
}

Kategori.deleteById = async (id) => {
    try {
        let result = await connection.awaitQuery(`DELETE FROM kategori where id=${id}`);
        return result.affectedRows
    } catch (error) {
        return 0;
    }
}



module.exports = Kategori;