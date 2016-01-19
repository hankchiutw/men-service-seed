"use strict";

/**
 * Dependencies
 */

const BaseSchema = require('app/models/BaseSchema');
const ObjectId = BaseSchema.Types.ObjectId;

/**
 * Session schema
 */

const fields = {
    user: { type: ObjectId, required: true, ref: 'User' },
    expiredAt: { type: Date, default: () => Date.now()+86400*30*1000 },   // 1 month
};

class Schema extends BaseSchema {
    constructor(){
        super(fields);
    }
}


/**
 * Expose
 */

module.exports = Schema;
