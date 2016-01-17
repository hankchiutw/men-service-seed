'use strict';

/**
 * Success and Fail callback
 */

let ret = function(req, res, next){
    res.ok = _ok;
    res.fail = _fail;
    next();
};
ret.fail = _fail;

module.exports = ret;


/**
 * Private implementation
 */

function _ok(obj){
    logger("res OK: ", obj);
    var ret = {
        result: {
            isSuccess: true,
            result: obj
        }
    };
    this.send(ret);
};

function _fail(obj, code){
    logger.error("res FAIL: ", obj, code || 450);
    let ret = {
        result: {
            isSuccess: false,
            errorCode: code || 450,
            errorMessage: typeof obj !== 'string' ? JSON.stringify(obj) : obj
        }
    };
    this.json(ret);
};
