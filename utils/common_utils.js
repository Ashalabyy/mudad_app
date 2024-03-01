const bcrypt = require('bcryptjs');

exports.structureResponse = (body, success, message) => {
    return {
        headers: {success, message},
        body: body
    };
};

exports.hashPassword = async (body) => {
    if (body.password) {
        body.password = await bcrypt.hash(body.password, 8);
    }
};