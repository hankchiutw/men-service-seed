'use strict';

/**
 * Dependencies
 */

const request = require("supertest");
const should = require("should");
const assert = require("assert");

const logger = require("./logger.js");

/**
 * Expose
 */

module.exports = _request;

//////////
// common request interface
function _request(url, method, path, mock, done){
    var ret = request(url)[method](path)
        .send(mock)
        .expect(200)
        .expect(resultOK);

    if(mock.authorization) ret = ret.set('Authorization', mock.authorization);
    if(mock.access_token) ret = ret.set('Authorization', 'Basic '+mock.access_token);
    if(mock.token) ret = ret.set('Authorization', 'Bearer '+mock.token);

    if(done)
        return ret.end(function(err, res){
            if(err) return done(err);
            done();
        });

    return ret;
}

// common expect result
function resultOK(res){
//    logger(res.body);
    should.not.exist(res.body.error, "Error in body.");
    should.exist(res.body.result, "Check body.");
    should.exist(res.body.result.isSuccess, "Should be new JSON format.");
    should.not.exist(res.body.result.errorMessage, "Check errorMessage: "+res.body.result.errorMessage);

    res.body.result.should.have.property('isSuccess', true);
}
