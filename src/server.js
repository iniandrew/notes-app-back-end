const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: process.env.NODE_ENV !== 'production' ? '8000' : '5000', // using port 8000 because port 5000 is used by airplay server in mac.
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        routes: {
            cors: {
                origin: ['*'],
            }
        }
    });

    server.route(routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

init();
