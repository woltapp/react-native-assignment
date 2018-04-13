import Joi from 'joi';
import uuid from 'uuid/v4';

import { createMockDb } from './db';

const createMockShift = (values) => Object.assign({
  id: uuid(),
  booked: false,
}, values);

const db = createMockDb({
  shifts: [
    createMockShift({ id: 'testid' }),
  ],
});

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: () => db.shifts.list(),
  },
  {
    method: 'POST',
    path: '/{id}/book',
    handler: ({ params }) => db.shifts.set(params.id, { booked: true }),
    config: {
      validate: {
        params: {
          id: Joi.required(),
        },
      },
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

export { plugin };
