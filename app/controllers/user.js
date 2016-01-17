'use strict';

/**
 * Dependencies
 */

const _co = require('lib/_co');
const User = require("app/models/User");
const Session = require("app/models/Session");

const common = require('app/controllers/common');

/**
 * Expose
 */

module.exports = {
    login: _co(login),
    logout: _co(logout),
    list: _co(list),
    one: _co(one),
    remove: _co(remove),
    create: _co(create),
    validToken: (req, res) => res.ok(req.user.toJSON())
};

/**
 *
 * Implements
 *
 */

function *list(req, res, next){
    let objs = yield common('User').list(req, res, next);
    if(objs) res.ok(objs);
}

function *one(req, res, next){
    let obj = yield common('User').one(req, res, next);
    if(obj) res.ok(obj.toJSON());
}

function *remove(req, res, next){
    let obj = yield common('User').remove(req, res, next);
    if(obj) res.ok(obj.toJSON());
}

function *create(req, res, next){
    let aUser = yield common('User').create(req, res, next);
    if(aUser) res.ok(aUser.toJSON());
}


function *login(req, res, next){
    let aUser = yield User.findOne({ username: req.body.username }).exec();

    if(!aUser) return next(logger.E('user not existed', 404));
    if(!aUser.comparePassword(req.body.password)) return next(logger.E('password wrong'));

    let aSession = yield Session.create({user: aUser});
    logger.info('Login success:', aSession);
    res.ok(aSession.toJSON());
}

function *logout(req, res){
}
