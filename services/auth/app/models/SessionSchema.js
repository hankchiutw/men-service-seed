"use strict";

const ObjectId = mongoose.Schema.Types.ObjectId;

/**
 * Session schema
 */
module.exports = {
    user: { type: ObjectId, required: true, ref: 'User' },
    expiredAt: { type: Date, default: () => Date.now()+86400*30*1000 },   // 1 month
};
