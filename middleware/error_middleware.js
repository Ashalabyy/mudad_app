const { Config } = require('../Config/config');
const { InternalServerException } = require('../utils/exceptions/api_exceptions');
const { TokenVerificationException, TokenExpiredException } = require('../utils/exceptions/auth_exceptions');

function errorMiddleware (err, req, res, next) {
    // TODO: Add better code checking for JWT errors
    if (err.status === 500 || !err.message) {
        if (!err.isOperational) err = new InternalServerException('Internal server error');
    } else if (err.name === "JsonWebTokenError") err = new TokenVerificationException();
    else if (err.message === "jwt expired") err = new TokenExpiredException();

    let { message, code, error, status = err.status || 500, data, stack } = err;

    if (Config.NODE_ENV === "dev"){
        console.log(`[Exception] ${error}, [Code] ${code}`);
        console.log(`[Error] ${message}`);
        console.log(`[Stack] ${stack}`);
    }

    const headers = {
        success: "0",
        error,
        code,
        message,
        ...(data) && data
    };

    res.status(status).send({headers, body: {}});
}

module.exports = errorMiddleware;