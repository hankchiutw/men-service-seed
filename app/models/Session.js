"use strict";

/**
 * Dependencies
 */

const BaseSchema = require('app/models/BaseSchema');
const ObjectId = BaseSchema.Types.ObjectId;

/**
 * Session schema
 */

class Schema extends BaseSchema {
    constructor(){
        const fields = {
            user: { type: ObjectId, required: true, ref: 'User' },
            expiredAt: { type: Date, default: () => Date.now()+86400*30*1000 },   // 1 month
        };
        super(fields);
    }
}


/**
 * Register
 */

const modelName = __filename.substring(__filename.lastIndexOf("/")+1, __filename.lastIndexOf("."));
module.exports = new Schema().registerModel(modelName);
