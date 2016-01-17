'use strict';

/**
 * Dependencies
 */

const config = require("config/config");
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const ejs = require('ejs');
const morgan = require('morgan');
const path = require('path');
const crypto = require('crypto');
const mime = require('node-mime');

/**
 * Expose
 */

module.exports = function(app){
    logger('Config express ...');

    // logger
    app.use(morgan('[:date[iso]] :status :remote-addr ":method :url :response-time ms :res[content-length] HTTP/:http-version" :remote-user ":user-agent" ":referrer"'));

    // template engine
    app.set('views', path.join(__dirname, '..', 'app/views'));
    app.set('view engine', 'html');
    app.engine('html', ejs.__express);

    // Static files middleware
    app.use(express.static(path.join(__dirname, '..', 'public')));

    // request parser
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // multer options
    let options = {
        storage: multer.diskStorage({
            destination: function(req, file, cb){ cb(null, config.uploadDir); },
            filename: function(req, file, cb){
                const toName = Date.now().toString()+'-'+crypto.createHash('md5').update(file.originalname).digest('hex')+'.'+mime.types[file.mimetype];
                cb(null, toName);
            }
        }),
        limits: {
            fileSize: config.maxFileSize
        }
    };
    app.use(multer(options).array('file', 7));
};
