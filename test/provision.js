'use strict';

require('mocha-generators').install();

const db = require('chai-mongo');
const mock = require('./mock');

const User = mongoose.model('User');

/** provision test data in hooks for testing */
module.exports = function(){

    before(function*(){
        yield db.create(User, mock.user);
    });

    after(function*(){
        yield db.remove(User, {username: mock.user.username});
    });

};
