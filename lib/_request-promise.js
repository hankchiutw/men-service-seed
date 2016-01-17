'use strict';

/**
 * Dependencies
 */

const rp = require("request-promise");

/**
 * Expose
 */

module.exports = _rp;

//////////
// common request interface
function _rp(options){
    if(options.resolveWithFullResponse === undefined) options.resolveWithFullResponse = true;
    if(options.transform === undefined) options.transform = function(body, response, resolveWithFullResponse){
        logger('request responsed:', response.headers);
        let ret = {
            headers: response.headers,
            body: response.body
        };
        return (resolveWithFullResponse ? ret : body);
    };

    return rp(options).then(obj => Promise.resolve(obj));
}
