'use strict';

const cn = require('co-nextware');
const User = mongoose.model('User');
const Session = mongoose.model('Session');


/**
 * Expose
 */

module.exports = {
    login: cn(login),
    logout: cn(logout),
    validToken: (req, res) => res.ok(req.user.toJSON())
};

/**
 *
 * Implements
 *
 */

function *login(req, res, next){
    logger.info('login params:', req.body);
    let aUser = yield User.findOne({ username: req.body.username }).select('+password').exec();

    if(!aUser) return next(logger.E('user not existed', 404));
    if(!aUser.validatePassword(req.body.password)) return next(logger.E('password wrong'));

    let aSession = yield Session.create({user: aUser});
    logger.info('Login success:', aSession);
    res.ok(aSession.toJSON());
}

function *logout(req, res){
    req.logout();
    res.ok('ok');
}
