'use strict';

/**
 * Dependencies
 */

const co = require("co");

/**
 * Expose
 */

module.exports = _co;


/**
 * Wrap co.wrap with error handling
 */

function _co(fn){
    return function(){
        // last argument should be 'next', 'done' object, or similar for error handling
        let args = Array.prototype.slice.call(arguments);

        return co.wrap(fn).apply(this, args).catch(args[args.length-1]);
    };
}
