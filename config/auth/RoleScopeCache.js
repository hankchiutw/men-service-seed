"use strict";

const RoleScopeCache = {
    resident: {
        user: [ 'read' ],
        community: [ 'read' ]
//        userFavorite: [ 'read' ]
    },
    company: {
        user: [ 'read', 'readUpdate' ],
        community: [ 'read' ]
    },
    distributor: {
        user: [ 'read', 'readUpdate', 'admin' ],
        community: [ 'read' ]
    },
    admin: {
        user: [ 'read', 'readUpdate', 'admin' ],
        community: [ 'admin' ]
    }
};

Object.defineProperty(RoleScopeCache, 'has', {
    value: function(roles, resource, scope){
        let self = this;
        if(roles.some(function(role){
            let roleObj = self[role];
            if(!roleObj){
                logger.info('roleObj not defined.');
                return true;
            }

            if(!roleObj[resource]){
                logger.info('role resource not defined.');
                return true;
            }
            if(!~roleObj[resource].indexOf(scope)){
                logger.info('scope not permitted.');
                return true;
            }
        })) return false;
        return true;
    }
});

/**
 * Expose
 */

module.exports = RoleScopeCache;
