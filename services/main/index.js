'use strict';

module.exports = function(ctx){
    const app = require('./config/express');
    const db = require('./config/db')(boot, ctx.config);

    require('./app/models/');
    require('./config/routes')(app);

    return {
        app,
        db
    };

    /**
     * Bootstrap
     */
    function boot(){
        let portInit = process.env.PORT || ctx.config.port;
        (function boot(){
            let port = portInit;
            portInit++;

            app.listen(port, function(){
                console.log('config:', ctx.config);
                console.log('NODE_ENV:', process.env.NODE_ENV);
                console.log('Express app started on port:', port);
            }).on('error', function(err){
                if(err.code == 'EADDRINUSE'){
                    console.log('****** EADDRINUSE, find next');
                    boot();
                }
            });

        })();
    }

};

