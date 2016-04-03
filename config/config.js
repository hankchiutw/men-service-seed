'use strict';

global.logger = require('lib/logger');

const dev = require('./env/dev');
const test = require('./env/test');
const prod = require('./env/prod');
const path = require('path');

const apiPrefix = '/api/v1';
const defaults = {
    dbOptions: { server: { keepAlive: 256, auto_reconnect: true } },
    services: {
        auth: { apiPath: `${apiPrefix}/auth`}
    }
};

/**
 * Transform
 */

let ret = {
    dev: Object.assign(dev, defaults),
    test: Object.assign(test, defaults),
    prod: Object.assign(prod, defaults)
}[process.env.NODE_ENV || 'dev'];

ret.hostUrl = 'http://'+ret.host+':'+ret.port;
ret.apiUrl = ret.hostUrl+apiPrefix;
ret.publicApiUrl = ret.publicHostUrl+apiPrefix;

/**
 * Expose
 */

module.exports = ret;
