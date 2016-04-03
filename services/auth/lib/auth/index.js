'use strict';

const passport = require("passport");
const bearer = require('./bearer');

passport.use(bearer);

/**
 * Expose
 */

module.exports = {
    initialize: function(){ return passport.initialize(); },
    verifyBearer: passport.authenticate('bearer', {session: false})
};
