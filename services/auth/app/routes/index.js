'use strict';

const router = require('express').Router();
const controllers = require('../controllers/');
const auth = require('../../lib/auth/');

console.log('(auth service) set routes ...');

/** set routes */
router.get('/validToken', auth.verifyBearer, controllers.validToken);
router.post('/login', controllers.login);
router.post('/logout', auth.verifyBearer, controllers.logout);
//router.post('/signup', controllers.signup);


/**
 * Expose
 */
module.exports = router;
