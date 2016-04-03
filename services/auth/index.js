'use strict';

/** expose auth service */
module.exports = function(ctx){
    require('./app/models/');

    // mount routes
    ctx.app.use(ctx.getServiceConfig('auth').apiPath, require('./app/routes/'));

    return require('./lib/auth/');

};

