"use strict";

/**
 * Dependencies
 */

const mongoose = require('mongoose');

/**
 * User schema
 */

const schema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    expiredAt: { type: Date, default: () => Date.now()+86400*30*1000 },   // 1 month
    disabled: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date
});

schema.virtual('objectId').get(function(){ return this._id;});
schema.set('toJSON', {virtuals: true});

/**
 * pre-save hook
 */

schema.pre("save", function(next){
    this.updatedAt = Date.now();
    this.markModified("updatedAt");
    next();
});

/**
 * Validations
 */

/**
 * Register
 */

const modelName = __filename.substring(__filename.lastIndexOf("/")+1, __filename.lastIndexOf("."));
module.exports = mongoose.model(modelName, schema, modelName);
