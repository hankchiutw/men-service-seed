'use strict';

/**
 * Dependencies
 */

const _co = require('lib/_co');

/**
 * Expose
 */

module.exports = function(Model){
    if(typeof Model === 'string') Model = require('app/models/'+Model);

    return {
        list: _co(list),
        one: _co(one),
        create: _co(create),
        remove: _co(remove)
    };

    /**
     *
     * Implements
     *
     */

    function *list(req, res, next){
        let objs = yield Model.find().exec();
        if(!objs) return next(logger.E('objs not existed: '+Model.modelName, 404));
        if(!res.headersSent) res.ok(objs);
    }

    function *one(req, res, next){
        let obj = yield Model.findById(req.params.objectId).exec();
        if(!obj) return next(logger.E('obj not existed: '+Model.modelName, 404));
        if(!res.headersSent) res.ok(obj.toJSON());
    }

    function *create(req, res, next){
        logger('To create obj:', Model.modelName, 'params: ', req.body);
        let obj = yield Model.create(req.body);
        if(!obj) return next('fail to create obj: '+Model.modelName);
        if(!res.headersSent) res.ok(obj.toJSON());
    }

    function *remove(req, res, next){
        logger('To remove obj:', Model.modelName, 'id: ', req.params.objectId);
        let obj = yield Model.findByIdAndRemove(req.params.objectId).exec();
//        if(!obj) return next(logger.E('fail to remove obj, obj may not existed: '+Model.modelName, 404));
        if(!res.headersSent) res.ok('removed');
    }
};

