const Kategori = require("../models/kategori");

const addKategori = async (request, h) => {
    const { nama } = request.payload;

    const newKategori = new Kategori({
        nama: nama
    })
    const isSuccess = await Kategori.create(newKategori);
    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'kategori berhasil ditambahkan',
            data: {
                idKategori: isSuccess,
            }
        });
        response.code(201);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'kategori gagal ditambahkan',
    });
    response.code(500);
    return response;
}

const getAllKategori = async (request, h) => {
    const data = await Kategori.getall();
    const response = h.response(data);
    return response;
};

const getKategoriById = async (request, h) => {
    const { id } = request.params;
    const data = await Kategori.getById(id);
    const response = h.response(data[0]);
    return response;
};

const deleteKategoriById = async (request, h) => {
    const { id } = request.params;
    const isSuccess = await Kategori.deleteById(id);
    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'kategori berhasil dihapus',
        });
        response.code(201);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'kategori gagal dihapus',
    });
    response.code(500);
    return response;
};
const updateKategoriById = async (request, h) => {
    const { id } = request.params;
    const { nama } = request.payload;

    const data = await Kategori.updateById(nama, id);
    if (data != 0) {
        const response = h.response({
            status: 'success',
            message: 'kategori berhasil diedit',
            data: data[0]
        });
        response.code(200);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'kategori gagal diedit',
    });
    response.code(500);
    return response;
};


module.exports = { addKategori, getAllKategori, getKategoriById, deleteKategoriById, updateKategoriById };