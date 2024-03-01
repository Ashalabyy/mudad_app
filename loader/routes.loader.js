const authRouter = require('../routes/auth.routes');

class RoutesLoader {
    static initRoutes (app, version) {
        app.use(`/api/${version}/auth`, authRouter);


    }
}

module.exports = {RoutesLoader};