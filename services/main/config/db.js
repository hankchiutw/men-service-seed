'use strict';

global.mongoose = require('mongoose-extend');

/** expose database */
module.exports = function(boot, config){
    console.log('(main service) Config db and boot ...');
    if(!boot) boot = function(){};

    mongoose.connection
        .on('open', boot)
        .on('disconnected', (msg) => {
            console.log('disconnected:', msg);
        })
        .on('reconnect', (msg) => {
            console.log('reconnected:', msg);
        })
        .on('error', console.error);

    return mongoose.connect(config.db, config.dbOptions);
};
