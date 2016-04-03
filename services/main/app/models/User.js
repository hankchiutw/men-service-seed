"use strict";

const bcrypt = require('bcrypt');

/**
 * Init schema
 */
const schema = new mongoose.BaseSchema(require('./UserSchema'));

schema.preHook('save', preSaveEncryptPassword);
schema.preHook('update', preSaveEncryptPassword);

schema.defineMethods({
    validatePassword
});


/**
 * Compare password string with encrypt password
 * @param {String} password
 */
function validatePassword(password){
    if(password === undefined) return false;
    if(typeof password !== 'string') return false;
    return bcrypt.compareSync(password, this.password);
}

/**
 * Encrypt password before save
 */
function preSaveEncryptPassword(){
    // `this` is a model instance
    if(this.password) this.password = bcrypt.hashSync(this.password, 1);
}

/**
 * Encrypt password before update
 */
function preUpdateEncryptPassword(){
    // `this` is a query object
    const criteria = this.getUpdate();
    if(criteria.$set && typeof criteria.$set.password === 'string' && criteria.$set.password.length > 0) criteria.$set.password = bcrypt.hashSync(criteria.$set.password, 1);
    if(typeof criteria.password === 'string' && criteria.password.length > 0) criteria.password = bcrypt.hashSync(criteria.password, 1);
}

/**
 * User model
 */
const modelName = __filename.substring(__filename.lastIndexOf("/")+1, __filename.lastIndexOf("."));
module.exports = mongoose.model(modelName, schema, modelName);
