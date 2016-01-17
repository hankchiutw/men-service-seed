/**
 * @api {File} 記錄上傳的圖片、影音檔 File
 * @apiName SchemaFile
 * @apiGroup 0_Schema
 *
 * @apiSuccessExample Object Model
 * {
 *  objectId: String,
 *  size: Number, # bytes
 *  filename: String,
 *  mimeType: String,
 *  type: String, # one of image, audio, video, file
 *
 *  # for image
 *  width: Number, # px
 *  height: Number, # px
 *
 *  createdAt: Date,
 *  updatedAt: Date
 * }
 *
 * @apiSuccessExample Normalized Object Model
 * {
 *  objectId: String,
 *  originName: String,
 *  originUrl: String,
 *  size: Number, # bytes
 *  filename: String,
 *  mimeType: String,
 *  type: String, # one of image, audio, video, file
 *
 *  # for image
 *  thumbName: String,
 *  thumbUrl: String,
 *  width: Number, # px
 *  height: Number, # px
 *
 *  createdAt: Date,
 *  updatedAt: Date
 * }
 *
 */
