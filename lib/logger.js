/**
 * @param {...}
 * @param {Number} level=0
 * @module modules/logger
 */

var util = require('util');
var colors = {
    log: {
        pre: '\x1b[2m%s\x1b[0m',    // grey
        msg: '\x1b[0m%s\x1b[0m'
    },
    info: {
        pre: '\x1b[34m%s\x1b[0m',    // blue
        msg: '\x1b[104;97m%s\x1b[0m'   // light blue, fg white
    },
    error: {
        pre: '\x1b[31m%s\x1b[0m',   // fgRed
        msg: '\x1b[41;97m%s\x1b[0m'    // bgRed
    }
};

/**
 * Implements
 */

var logger = {};
['log', 'info', 'error'].forEach(function(attr){
    logger[attr] = func;

    function func(){
        var args = Array.prototype.slice.call(arguments);
        var at = new Date();
        args.forEach(function(obj, i){
            var pre = "["+attr.toUpperCase()+" @ "+at.toISOString()+"][args "+i+"]: ";
            console[attr](colors[attr].pre, pre);
            console[attr](colors[attr].msg, util.inspect(obj, {depth: 5}));
        });

        return true;
    };
});

function E(message, code){
    return { message, code };
}

/**
 * Expose
 */

var ret = logger.log;
ret.error = logger.error;
ret.info = logger.info;
ret.E = E;
module.exports = ret;

