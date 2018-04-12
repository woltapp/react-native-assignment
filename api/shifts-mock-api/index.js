const Joi = require('joi');

const routes = [
  {
    method: 'GET',
    path: '/',
    config: {
      handler: () => ({ test: 'test' }),
    },
  },
];

const plugin = {
  name: 'shifts-mock-api',
  version: '1.0.0',
  register(server) {
    server.route(routes);
  },
};

module.exports.plugin = plugin;
