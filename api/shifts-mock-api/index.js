import Joi from 'joi';
import Boom from 'boom';

import { delay } from './utils';
import { createMockDb } from './db';
import mockShifts from './mockShifts';

const db = createMockDb({ shifts: mockShifts });

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
      const shift = await db.shifts.get(params.id);
      await delay(200);

      if (!shift) {
        throw Boom.notFound(`Shift not found with id ${params.id}`);
      }

      return shift;
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
      const shift = await db.shifts.get(params.id);

      if (!shift) {
        throw Boom.notFound(`Shift not found with id ${params.id}`);
      } else if (shift.booked) {
        throw Boom.badRequest(`Shift ${params.id} is already booked`);
      }

      await db.shifts.set(params.id, { booked: true });
      await delay(500);

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
      const shift = await db.shifts.get(params.id);

      if (!shift) {
        throw Boom.notFound(`Shift not found with id ${params.id}`);
      } else if (!shift.booked) {
        throw Boom.badRequest('Cannot cancel shift that is not booked');
      }

      await db.shifts.set(params.id, { booked: false });
      await delay(500);

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
