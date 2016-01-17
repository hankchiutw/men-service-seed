
/**
 * @apiDefine CommonSuccess Success Response
 */

/**
 * @apiDefine AuthHeader
 * @apiHeader {String} Authorization Bearer token of each request.
 */

/**
 * @apiDefine CommonParams
 *
 * @apiHeader {String} Authorization Bearer token of each request.
 */

/**
 * @apiDefine CommonCloudParams
 *
 * @apiParam {String} access_token Bearer token of each request.
 */

/**
 * @apiDefine CommonQueryParams
 *
 * @apiParam {Boolean} [enabledOnly=true] False to query all data including disabled data. Default true.
 * @apiParam {Number} [skip=0] Skip from begin before doing query process. Ignored when doing count.
 * @apiParam {Number} [limit=20] Limit the query results count.
 * @apiParam {Date} [createdBefore] Date that createdAt should be less than. Order descendingly.
 * @apiParam {Date} [createdBeforeOrEqualTo] Date that createdAt should be less than or equal to. Order descendingly.
 * @apiParam {Date} [createdAfter] Date that createdAt should be greater than. Order ascendingly.
 * @apiParam {Date} [createdAfterOrEqualTo] Date that createdAt should be greater than or equal to. Order ascendingly.
 *
 * @apiParam {Number} [createdBeforeTime] Date that createdAt should be less than. Order descendingly.
 * @apiParam {Number} [createdBeforeOrEqualToTime] Date that createdAt should be less than or equal to. Order descendingly.
 * @apiParam {Number} [createdAfterTime] Date that createdAt should be greater than. Order ascendingly.
 * @apiParam {Number} [createdAfterOrEqualToTime] Date that createdAt should be greater than or equal to. Order ascendingly.
 */

/**
 * @apiDefine CommonSuccess
 * @apiSuccess (CommonSuccess) {Object} result Root object
 * @apiSuccess (CommonSuccess) {Boolean} result.isSuccess Always true.
 * @apiSuccess (CommonSuccess) {Object} result.result Normalized object model or collection
 * @apiSuccessExample Example
 * HTTP/1.1 200 OK
 * {
 *  "result": {
 *      "isSuccess": true,
 *      "result": {
 *          Normalized object model
 *      }
 *  }
 * }
 *
 * @apiSuccessExample Collection Example
 * HTTP/1.1 200 OK
 * {
 *  "result": {
 *      "isSuccess": true,
 *      "result": [{
 *          Normalized object model
 *      }]
 *  }
 * }
 *
 */

/**
 * @apiDefine SimpleSuccess
 * @apiSuccess (CommonSuccess) {Object} result Root object
 * @apiSuccess (CommonSuccess) {Boolean} result.isSuccess Always true.
 * @apiSuccess (CommonSuccess) {Object} result.result
 * @apiSuccessExample Example
 * HTTP/1.1 200 OK
 * {
 *  "result": {
 *      "isSuccess": true,
 *      "result": 'ok'
 *  }
 * }
 *
 */

/**
 * @apiDefine CommonError Error Response
 * @apiError (CommonError) {Object} result Root object
 * @apiError (CommonError) {Boolean} result.isSuccess Always false.
 * @apiError (CommonError) {Number} result.errorCode
 * @apiError (CommonError) {String} result.errorMessage
 * @apiErrorExample Example
 * HTTP/1.1 400 Bad request
 * {
 *  "result": {
 *      "isSuccess": false,
 *      "errorCode": 450,
 *      "errorMessage": "something wrong"
 *  }
 * }
 */

