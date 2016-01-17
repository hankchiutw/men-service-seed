'use strict';

/**
 * Dependencies
 */

const common = require('app/controllers/common');

const user = require('app/controllers/user');

/**
 * Expose
 */

module.exports = function(app, auth){
    logger('user routes ...');

/**
 * Routes
 */

    app.get('/api/user/validToken', auth.verifyBearer, user.validToken);

//    app.post('/api/user/signup', user.signup);
    app.post('/api/user/login', user.login);
    app.post('/api/user/logout', auth.verifyBearer, user.logout);

    app.get('/api/user', auth.hasScope('user', 'read'), user.list);
    app.get('/api/user/:objectId', auth.hasScope('user', 'read'), user.one);
    app.delete('/api/user/:objectId', auth.hasScope('user', 'admin'), user.remove);
    app.post('/api/user', auth.hasScope('user', 'admin'), user.create);

};
