"use strict";


/**
 * Session schema
 */

const schema = new mongoose.BaseSchema(require('./SessionSchema'));


/**
 * Session model
 */
const modelName = __filename.substring(__filename.lastIndexOf("/")+1, __filename.lastIndexOf("."));
module.exports = mongoose.model(modelName, schema, modelName);
