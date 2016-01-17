'use strict';

/**
 * Dependencies
 */

const _co = require('lib/_co');

const User = require('app/models/User');

/**
 * Bootstrap
 */

require('config/db')().on('open', function(){
    let self = this;
    _co(build)().then(function(){
        self.close();
    }, logger.error);
});

/**
 * Implements
 */

const mock = {
    admin: {
        username: 'admin',
        password: 'a',
        gender: '男',
        roles: ['admin']
    },
    resident: {
        username: 'user',
        password: 'a',
        gender: '男',
        roles: ['resident']
    },
    distributor: {
        username: 'distributor',
        password: 'a',
        gender: '男',
        roles: ['distributor']
    },
    company: {
        username: 'company',
        password: 'a',
        gender: '男',
        roles: ['company']
    }
};

function *build(){
    logger('Start to build User db ...');

    for(let role of Object.keys(mock)){
        let obj = yield User.findOne({ username: mock[role].username}).exec();
        obj = obj ||( yield User.create(mock[role]));
        logger(role+':', obj._toJSON({transform: function(doc, ret, options){
            delete ret.password;
            return ret;
        }}));
    }
}
