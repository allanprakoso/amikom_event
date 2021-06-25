var ImageKit = require("imagekit");
var fs = require('fs');

var imagekit = new ImageKit({
    publicKey : "public_wxaQU5YVJaFAGUd+SFMUNcLww7w=",
    privateKey : "private_ZEo1QTVR6gUhUhiWi7qYrKVVt18=",
    urlEndpoint : "https://ik.imagekit.io/wjgpds2jglv/"
});

const getAuth = async (request, h) => {
    return h.response(imagekit.getAuthenticationParameters());
};

module.exports = getAuth;