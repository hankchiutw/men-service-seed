"use strict";

/**
 * Dependencies
 */

const BaseSchema = require('app/models/BaseSchema');
const ObjectId = BaseSchema.Types.ObjectId;
const bcrypt = require('bcrypt');
const extend = require('util')._extend;

/**
 * User schema
 */

class Schema extends BaseSchema {
    constructor(){
        const fields = {
            username: { type: String, required: true, unique: true},
            password: { type: String, required: true},  // bcrypt
            nickname: { type: String},
            fullname: { type: String},
            gender: { type: String, required: true, enum: ['女', '男']},
            description: { type: String},
            houses: [{ type: ObjectId, ref: 'House' }],
            currentHouse: { type: ObjectId, ref: 'House' },
            favoriteStores: [{ type: ObjectId, ref: 'Place' }],
            favoriteNews: [{ type: ObjectId, ref: 'News' }],
            portraitImage: { type: ObjectId, ref: 'File' },
            lastLoggedAt: { type: Date},
            roles: [{ type: String, enum: [ 'resident', 'distributor', 'company', 'admin' ], default: 'resident'}]
        };
        super(fields);

        let schema = this;

        /**
         * Middleware hook
         */

        schema.pre("save", BaseSchema.buildHook(preSaveEncryptPassword));
        schema.pre("update", BaseSchema.buildHook(preUpdateEncryptPassword));

        /**
         * Instance methods of mongoose.model instance object(i.e. document)
         */

        schema.methods = extend( schema.methods, {
            comparePassword
        })
    }

    
}

/**
 * Model instance method implements
 */

function comparePassword(password){
    return bcrypt.compareSync(password, this.password);
}

/**
 * Hook implements
 */

function preSaveEncryptPassword(){
    if(this.password) this.password = bcrypt.hashSync(this.password, 1);
}

function preUpdateEncryptPassword(){
    const criteria = this.getUpdate();
    if(criteria.$set && criteria.$set.password) criteria.$set.password = bcrypt.hashSync(criteria.$set.password, 1);
}

/**
 * Register
 */

const modelName = __filename.substring(__filename.lastIndexOf("/")+1, __filename.lastIndexOf("."));
module.exports = new Schema().registerModel(modelName);
