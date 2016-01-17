'use strict';

/**
 * Dependencies
 */

const passport = require("passport");
const bearer = require('config/auth/bearer');
const RoleScopeCache = require("config/auth/RoleScopeCache");

passport.use(bearer);

/**
 * Expose
 */

logger('Config auth ...');
module.exports = {
    initialize: function(){ return passport.initialize(); },
    hasScope,
    verifyBearer: passport.authenticate('bearer', {session: false})
};

/**
 * Implements
 */

/**
 * Check permission according to token role
 * @params resource resource name
 */

function hasScope(resource, scope){
    return [ this.verifyBearer, function(req, res, next){
        logger.info('Check hasScope: (roles, resource, scope):', req.user.roles, resource, scope );
        if(!req.user.roles) return next('hasScope: req.user.role undefined');
        if(!RoleScopeCache.has(req.user.roles, resource, scope)) return next('hasScope: no permission.');

        next();
    }];
}
