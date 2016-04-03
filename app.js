'use strict';

let ctx = {
    config: require('./config/config'),
    app: {},
    db: {},
    getServiceConfig: function(name){ return ctx.config.services[name]; },
    services: {}
};

ctx.services.main = require('./services/main/')(ctx);

ctx.app = ctx.services.main.app;
ctx.db = ctx.services.main.db;

/**
 * include more services
 */

ctx.services.auth = require('./services/auth')(ctx);

require('./test-runner');
