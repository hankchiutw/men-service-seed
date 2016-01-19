'use strict';

/**
 * Dependencies
 */

const file = require('app/controllers/file');

/**
 * Expose
 */

module.exports = function(app, auth){
    logger('file routes ...');

/**
 * Routes
 */

    app.post('/api/file', file.create);
//    app.post('/api/file', auth.hasScope('user', 'admin'), file.create);

};
