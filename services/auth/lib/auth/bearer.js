'use strict';

const cn = require('co-nextware');
const BearerStrategy = require('passport-http-bearer').Strategy;
const Session = require('../../app/models/Session');

/**
 * Expose
 */

module.exports = new BearerStrategy(cn(check));

/**
 * Implements
 */

function *check(token, done){
    let aSession = yield Session.findById(token).populate('user').exec();
    logger.info('Check bearer: (token, session):', token, aSession);
    if(!aSession) return done(logger.E('token not found', 404));
    if(!aSession.user) return done(logger.E('session user not found', 404));
    if(aSession.expiredAt < new Date()) return done(logger.E('token expired', 401));
    return done(null, aSession.user);

}
