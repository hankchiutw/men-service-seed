"use strict";

/**
 * Dependencies
 */

const bcrypt = require('bcrypt');
const extend = require('util')._extend;

/**
 * User schema
 */

const Schema = require('app/models/UserSchema');
const schema = new Schema();

/**
 * Models instance methods
 */

schema.methods = extend( schema.methods, {
    userTransformer,
    comparePassword
})

/**
 * Model instance methods implement
 */

function comparePassword(password){
    return bcrypt.compareSync(password, this.password);
}

function userTransformer(doc, ret, options){
    logger.info('userTransformer:');
    ret = this._defaultTransformer(doc, ret, options);
    return ret;
}

/**
 * Register
 */

const modelName = __filename.substring(__filename.lastIndexOf("/")+1, __filename.lastIndexOf("."));
module.exports = schema.registerModel(modelName);
