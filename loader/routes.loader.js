const authRouter = require('../routes/auth.routes');

const servicesRouter = require('../routes/services.routes');

const productsRouter = require('../routes/products.routes');

const ordersRouter = require('../routes/orders.routes');

class RoutesLoader {
    static initRoutes (app, version) {
        app.use(`/api/${version}/auth`, authRouter);

        
        app.use(`/api/${version}/services`, servicesRouter);

      
        app.use(`/api/${version}/products`, productsRouter);

        app.use(`/api/${version}/orders`, ordersRouter);
        


    }
}

module.exports = {RoutesLoader};