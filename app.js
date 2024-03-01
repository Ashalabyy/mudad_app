const { ExpressLoader } = require('./loader/express_loader');
const { RoutesLoader } = require('./loader/routes.loader');
const { MiddlewareLoader } = require('./loader/middleware_loader');
const {Config} = require('./Config/config');
const mongoose = require('mongoose');
// load express
const app = ExpressLoader.init();
// init routes
const version = "v1";

RoutesLoader.initRoutes(app, version);


// init middleware
MiddlewareLoader.init(app);

const dbHost = Config.DB_HOST;
const port = Config.PORT;
    



     mongoose.connect(dbHost, {
      
   
      }).then( client =>{
    app.listen(port);
    console.log(`
    ============================================
    🚀 Server running on port ${port}!🚀
    ============================================
    `);
}).catch(err => {
    console.log(err);
});  
module.exports = app;

 
