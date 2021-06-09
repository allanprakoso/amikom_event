const { nanoid } = require("nanoid");
const User = require("../models/users.js");

const addUsers = async (request, h) => {
    const { username, password } = request.payload;
    const id = nanoid(16);

    const newUser = new User({
        id: id,
        username: username,
        password: password,
    })

    const isSuccess = await User.create(newUser);
    console.log(isSuccess);
    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'registrasi berhasil',
            data: {
                userId: id,
            }
        });
        response.code(201);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'registrasi gagal',
    });
    response.code(500);
    return response;
}

const get = async (request, h) => {
    const data = await User.getall();
    const response = h.response(data);
    return response;
};

module.exports = { addUsers, get };