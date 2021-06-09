const Hapi = require('@hapi/hapi');
const routes = require('./routes/routes');
const Path = require('path');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'public')
      },
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register(require('@hapi/inert'));

  server.route(routes);
  await server.start();
  console.log(`server running on ${server.info.uri}`);
};


init();
