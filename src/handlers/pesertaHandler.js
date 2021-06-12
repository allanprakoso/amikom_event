const Peserta = require("../models/peserta");

const addPeserta = async (request, h) => {
    const { nama, email, notelp, gender } = request.payload;
    const {idEvent} = request.params;

    const newPeserta = new Peserta({
        nama: nama,
        email: email,
        notelp: notelp,
        gender : gender,
        idEvent : idEvent
    })

    const isSuccess = await Peserta.create(newPeserta);
    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Registrasi Berhasil, Kami telah mengirimkan Tiket Event ke Email Anda',
            data: {
                idPeserta: isSuccess,
            }
        });
        response.code(201);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'Registrasi gagal',
    });
    response.code(500);
    return response;
}

const getAllPeserta = async (request, h) => {
    const data = await Peserta.getall();
    const response = h.response(data);
    return response;
};

const getPesertaById = async (request, h) => {
    const { id } = request.params;
    const data = await Peserta.getById(id);
    const response = h.response(data);
    return response;
};

module.exports = {getAllPeserta, getPesertaById, addPeserta} 