'use strict';

require('mocha-generators').install();

const apiUrl = require('config/config').publicApiUrl;
const api = require('modules/chai-api/')(apiUrl);
const mock = require('./mock');

describe('>> auth service routes', function(){

    require('./provision')();

    it('should login success', function*(){
        const req = { body: mock.user };
        yield api.success('POST', '/auth/login', req);
    });

    it('should logout success');
});
