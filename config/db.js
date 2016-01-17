'use strict';

/**
 * Dependencies
 */

const config = require('config/config');
const mongoose = require('mongoose');

/**
 * Expose
 */

module.exports = function(){
    logger('Config db ...');

    return mongoose.connect(config.db, config.dbOptions)
        .connection
        .on('disconnected', (msg) => {
            logger.info('disconnected:', msg);
        })
        .on('reconnect', (msg) => {
            logger.info('reconnected:', msg);
        })
        .on('error', logger.error);
};
