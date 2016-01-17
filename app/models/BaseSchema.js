"use strict";

/**
 * Dependencies
 */

const mongoose = require('mongoose');
const extend = require('util')._extend;

/**
 * Class definition
 */

class BaseSchema extends mongoose.Schema {

    constructor(options){
        /**
         * Extend with basic schema attributes
         */

        extend(options, {
            disabled: { type: Boolean, default: false },
            createdAt: { type: Date, default: Date.now },
            updatedAt: Date
        });
        super(options);

        /**
         * Configuration
         */

        let schema = this;

        schema.role = '';
        schema._defaultJSONOptions = {virtuals: true, versionKey: false};

        schema.virtual('objectId').get(function(){ return this._id;});
        schema.set('toJSON', schema._defaultJSONOptions);

        /**
         * Middleware hook
         */

        schema.pre("save", function(next){
            this.updatedAt = Date.now();
            this.markModified("updatedAt");
            next();
        });

        /**
         * Instance methods of mongoose.model instance object(i.e. document)
         */

        schema.methods = {
            setRole,
            _toJSON
        };

        /**
         * Static methods of mongoose.model 
         */

        schema.statics = {};

        /**
         * Validations
         */

        /*
        schema.path('path').validate(function(arr){
            let ret = true;
            return ret;
        }, '{PATH} should be ');
        */
    }

    registerModel(modelName){
        return mongoose.model(modelName, this, modelName);
    }

    static buildHook(fn){
        return function(next){
            fn.apply(this);
            next();
        }
    }
}

/**
 * Model instance method implements
 */

function _toJSON(role){
    
    return this.toJSON({ transform: fn, virtuals: true, versionKey: false});
}

function setRole(role){
    this.role = role;
    return this;
}

/**
 * Expose
 */

module.exports = BaseSchema;
