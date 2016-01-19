"use strict";

/**
 * Dependencies
 */

const extend = require('util')._extend;

/**
 * Session schema
 */

const Schema = require('app/models/SessionSchema');
const schema = new Schema();

/**
 * Models instance methods
 */

schema.methods = extend( schema.methods, {
})

/**
 * Register
 */

const modelName = __filename.substring(__filename.lastIndexOf("/")+1, __filename.lastIndexOf("."));
module.exports = schema.registerModel(modelName);
