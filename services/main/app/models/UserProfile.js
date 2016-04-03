"use strict";

const schema = new mongoose.BaseSchema(require('./UserProfileSchema'));

/**
 * UserProfile model
 */
const modelName = __filename.substring(__filename.lastIndexOf("/")+1, __filename.lastIndexOf("."));
module.exports = mongoose.model(modelName, schema, modelName);
