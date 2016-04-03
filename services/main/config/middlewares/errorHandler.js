'use strict';

const fail = require('./res').fail;

/**
 * Expose
 */

exports.clientErrorHandler = function (err, req, res, next) {
    res.fail = fail;

//    if(err.code === 'LIMIT_FILE_SIZE')
//        res.fail('File too large. Maximum '+config.maxFileSize+' bytes.');

//    logger.error('clientErrorHandler:', err);
    if(res.headersSent) return next(err);
    if(typeof err === 'string') res.fail(err);
    if(typeof err === 'object') res.fail(err.message, err.code);
};
