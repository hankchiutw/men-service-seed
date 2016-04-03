'use strict';

/** context object across all services */
let ctx = {
    config: require('./config/config'),
    app: {},
    db: {},
    getServiceConfig: function(name){ return ctx.config.services[name]; },
    services: {}
};

/** boot main service */
ctx.services.main = require('./services/main/')(ctx);

ctx.app = ctx.services.main.app;
ctx.db = ctx.services.main.db;

/**
 * include more services
 */

ctx.services.auth = require('./services/auth')(ctx);

require('./test-runner');
