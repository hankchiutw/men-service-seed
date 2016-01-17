'use strict';

/**
 * Dependencies
 */

const config = require("config/config.js");

const request = require("lib/_supertest");
const HOST_API_URL = config.publicApiUrl+'/';

describe("User", function(){
    it("should pass admin token, create and get an user", create);
//    it("should pass admin token, remove an user", remove);
    it("should check role and get user list", list);
    it("should check role and get one user", one);
    it("should get user with token", validToken);
    it("should login and get user session", login);
});

/////////

const MOCK = ({
    dev: {
        token: '5698499681749d5825987fb2',
        userToken: '5698499681749d5825987fb2',
        adminToken: '569849b081749d5825987fb3',
        objectId: '569849c281749d5825987fb4'
    },
    test: {
        postId: 'a'
    }
})[process.env.NODE_ENV || 'dev'];

function validToken(done){
    this.timeout(10000);
    var mock = {
        token: MOCK.token
    };
    request(HOST_API_URL, "get", "user/validToken", mock, done)
}

function login(done){
    this.timeout(10000);
    var mock = {
        username: 'user',
        password: 'a'
    };
    request(HOST_API_URL, "post", "user/login", mock, done)
}

function list(done){
    this.timeout(10000);
    var mock = {
        token: MOCK.token
    };
    request(HOST_API_URL, "get", "user", mock, done)
}

function one(done){
    this.timeout(10000);
    var mock = {
        token: MOCK.token,
        objectId: MOCK.objectId
    };
    request(HOST_API_URL, "get", "user/"+mock.objectId, mock, done)
}

function create(done){
    this.timeout(10000);
    var mock = {
        token: MOCK.adminToken,
        gender: '女',
        username: 'user'+Date.now(),
        password: 'a'
    };
    request(HOST_API_URL, "post", "user", mock, done)
}

function remove(done){
    this.timeout(10000);
    var mock = {
        token: MOCK.adminToken,
        objectId: MOCK.objectId
    };
    request(HOST_API_URL, "delete", "user/"+mock.objectId, mock, done)
}

function signup(done){
    this.timeout(10000);
    var mock = {
        gender: '女',
        username: 'signup'+Date.now(),
        password: 'a'
    };
    request(HOST_API_URL, "post", "user/signup", mock, done)
}
