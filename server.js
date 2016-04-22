'use strict';

var Hapi = require('hapi'),
    server = new Hapi.Server();

server.register(require('inert'), function(err) {
    if (err) {
        throw err;
    }

    server.connection({ port: 3000 });

    server.route([{
            method: 'GET',
            path: '/static/{param*}',
            handler: {
                directory: {
                    path: 'build/static'
                }
            }
        },
        {
            method: 'GET',
            path: '/app/{param*}',
            handler: {
                directory: {
                    path: 'app'
                }
            }
        },
        {
            method: 'GET',
            path: '/assets/{param*}',
            handler: {
                directory: {
                    path: 'assets'
                }
            }
        },
        {
            method: 'GET',
            path: '/{path*}',
            handler: function(request, reply) {
                reply.file('./build/index.html');
            }
        }
    ]);

    server.start(function(err) {
        if (err) {
            throw err;
        }
        console.log('Web server is listening to http://localhost:3000');
    });
});
