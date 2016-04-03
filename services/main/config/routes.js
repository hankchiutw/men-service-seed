'use strict';

const res = require('./middlewares/res');
const cors = require('./middlewares/cors');
const errorHandler = require("./middlewares/errorHandler");

/**
 * Expose
 */

module.exports = function(app){
    console.log('(main service) Config routes ...');

/**
 * Common middlewares
 */

    app.use(cors);
    app.use(res);

/**
 * Routes
 */

    app.get('/', function(req, res){ res.ok('ok');});


    app.use(errorHandler.clientErrorHandler);
};
