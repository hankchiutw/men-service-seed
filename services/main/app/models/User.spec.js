'use strict';

require('mocha-generators').install();

const assert = require('chai').assert;

const User = require('./User');

describe('>User', function(){

    describe('#password related', function(){
        const obj = {
            username: 'testuser1',
            password: 'testpassword',
            gender: '男'
        };

        // create test user
        beforeEach(function(done){
            User.create(obj, done);
        });

        // safely clear test data
        afterEach(function*(){
            yield User.remove({username: obj.username}).exec();
            const emptyUser = yield User.findOne({username: obj.username}).exec();
            assert.isNotOk(emptyUser);
        });


        it('should auto encrypt password', function*(){
            const user = yield User.findOne({username: obj.username}).select('+password').exec();
            assert.equal(user.username, obj.username);
            assert.isOk(obj.password);
            assert.isTrue(user.validatePassword(obj.password));
        });

        it('should not return password attribute', function*(){
            const user = yield User.findOne({username: obj.username}).exec();
            assert.isNotOk(user.password);
        });
    });
});
