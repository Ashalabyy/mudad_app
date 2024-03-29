const { InvalidEndpointException } = require('../utils/exceptions/api_exceptions');
const errorMiddleware = require('../middleware/error_middleware');

class MiddlewareLoader {
    static init (app){
        // 404 endpoint handler
        app.all('*', (req, res, next) => {
            const err = new InvalidEndpointException();
            next(err);
        });

        // Error middleware
        app.use(errorMiddleware);
    }
}

module.exports = { MiddlewareLoader };