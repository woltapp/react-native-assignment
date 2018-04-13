import Joi from 'joi';
import uuid from 'uuid/v4';
import { DateTime } from 'luxon';

import { createMockDb } from './db';

const createMockShift = (values) => Object.assign({
  id: uuid(),
  booked: false,
}, values);

const shiftTime = dateObj => DateTime.fromObject(dateObj).valueOf();

const db = createMockDb({
  shifts: [
    createMockShift({
      id: 'testid',
      area: 'Helsinki',
      startTime: shiftTime({ hour: 12 }),
      endTime: shiftTime({ hour: 14 }),
    }),
  ],
});

const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: async () => {
      await delay(500);
      return db.shifts.list();
    },
  },
  {
    method: 'GET',
    path: '/{id}',
    handler: async ({ params }) => {
      await delay(200);
      return db.shifts.get(params.id);
    },
    config: {
      validate: {
        params: {
          id: Joi.string().required(),
        },
      },
    },
  },
  {
    method: 'POST',
    path: '/{id}/book',
    handler: async ({ params }) => {
      await delay(500);
      await db.shifts.set(params.id, { booked: true });

      return 'OK';
    },
    config: {
      validate: {
        params: {
          id: Joi.string().required(),
        },
      },
    },
  },
  {
    method: 'POST',
    path: '/{id}/cancel',
    handler: async ({ params }) => {
      await delay(500);
      await db.shifts.set(params.id, { booked: false });

      return 'OK';
    },
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
