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

Event.getall = async (param, admin) => {
    if (admin) {
        if(param==0){
            return await connection.awaitQuery(`
        SELECT events.id, events.judul,events.deskripsi, events.urlImage , DATE_FORMAT(CAST(events.tanggal as DATE), "%c-%d-%Y") AS tanggal , DATE_FORMAT(CAST(events.tanggal as TIME), "%H:%i") AS jam ,
        kategori.nama as kategori, events.idKategori , 
        (SELECT COUNT(id) from peserta where peserta.idEvent=events.id) as peserta 
        FROM events INNER JOIN kategori ON events.idKategori = kategori.id 
        Where events.id NOT IN (select id from events where tanggal > (SELECT NOW() AS DATETIME))
        ORDER BY tanggal DESC`);
        }
        if(param==1){
            return await connection.awaitQuery(`
        SELECT events.id, events.judul,events.deskripsi, events.urlImage , DATE_FORMAT(CAST(events.tanggal as DATE), "%c-%d-%Y") AS tanggal , DATE_FORMAT(CAST(events.tanggal as TIME), "%H:%i") AS jam ,
        kategori.nama as kategori, events.idKategori , 
        (SELECT COUNT(id) from peserta where peserta.idEvent=events.id) as peserta 
        FROM events INNER JOIN kategori ON events.idKategori = kategori.id 
        Where events.tanggal > (SELECT NOW() AS DATETIME)
        ORDER BY tanggal DESC`);
        }
        return await connection.awaitQuery(`
        SELECT events.id, events.judul,events.deskripsi, events.urlImage , DATE_FORMAT(CAST(events.tanggal as DATE), "%c-%d-%Y") AS tanggal , DATE_FORMAT(CAST(events.tanggal as TIME), "%H:%i") AS jam ,
        kategori.nama as kategori, events.idKategori , 
        (SELECT COUNT(id) from peserta where peserta.idEvent=events.id) as peserta 
        FROM events INNER JOIN kategori ON events.idKategori = kategori.id ORDER BY tanggal DESC`);
    } else {
        if (param == 0) {
            return await connection.awaitQuery(`
            SELECT id, judul, deskripsi, DATE_FORMAT(CAST(tanggal as DATE), "%c-%d-%Y") AS tanggal , DATE_FORMAT(CAST(tanggal as TIME), "%H:%i") AS jam , urlImage , idKategori, (SELECT nama FROM kategori WHERE id =idKategori) AS kategori
            FROM events WHERE id NOT IN 
            (select id from events where tanggal > (SELECT NOW() AS DATETIME)) ORDER BY tanggal DESC`);
        }
        if (param == 1) {
            return await connection.awaitQuery(`
            SELECT id, judul, deskripsi, DATE_FORMAT(CAST(tanggal as DATE), "%c-%d-%Y") AS tanggal , DATE_FORMAT(CAST(tanggal as TIME), "%H:%i") AS jam , urlImage , idKategori, (SELECT nama FROM kategori WHERE id =idKategori) AS kategori
            FROM events  WHERE tanggal > (SELECT NOW() AS DATETIME) ORDER BY tanggal DESC`);
        }
        else {
            return await connection.awaitQuery(`
            SELECT id, judul, deskripsi, DATE_FORMAT(CAST(tanggal as DATE), "%c-%d-%Y") AS tanggal , DATE_FORMAT(CAST(tanggal as TIME), "%H:%i") AS jam, urlImage , idKategori, (SELECT nama FROM kategori WHERE id =idKategori) AS kategori
            FROM events ORDER BY tanggal DESC`);
        }
    }
}

Event.getById = async (id) => {
    console.log(id);
    let result = await connection.awaitQuery(`
    SELECT events.id, events.judul, events.deskripsi, 
    DATE_FORMAT(CAST(events.tanggal as DATE), "%c-%d-%Y") AS tanggal , DATE_FORMAT(CAST(events.tanggal as TIME), "%H:%i") AS jam , events.urlEvent, events.urlImage, 
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

Event.listEventAdmin = async () => {
    return await connection.awaitQuery(`
    SELECT events.id, events.judul, events.urlImage , DATE_FORMAT(CAST(events.tanggal as DATE), "%c-%d-%Y") AS tanggal , DATE_FORMAT(CAST(events.tanggal as TIME), "%H:%i") AS jam ,
    kategori.nama as kategori, events.idKategori , 
    (SELECT COUNT(id) from peserta where peserta.idEvent=events.id) as peserta 
    FROM events INNER JOIN kategori ON events.idKategori = kategori.id ORDER BY tanggal DESC`);
}

Event.top3 = async ()=> {
    return await connection.awaitQuery(`
    SELECT events.id, events.judul, events.urlImage , DATE_FORMAT(CAST(events.tanggal as DATE), "%c-%d-%Y") AS tanggal , DATE_FORMAT(CAST(events.tanggal as TIME), "%H:%i") AS jam ,
    kategori.nama as kategori, events.idKategori , 
    (SELECT COUNT(id) from peserta where peserta.idEvent=events.id) as peserta 
    FROM events INNER JOIN kategori ON events.idKategori = kategori.id ORDER BY tanggal DESC LIMIT 3`);
}
module.exports = Event;

