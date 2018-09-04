import uuid from 'uuid/v4';
import { DateTime } from 'luxon';

const shiftTime = (dateObj, shiftDays = 0) =>
  DateTime.fromObject(dateObj).plus({ days: shiftDays }).valueOf();

const createMockShift = (values) => Object.assign({
  id: uuid(),
  booked: false,
}, values);

export default [
  createMockShift({
    area: 'Helsinki',
    startTime: shiftTime({ hour: 12 }),
    endTime: shiftTime({ hour: 14 }),
  }),
  createMockShift({
    area: 'Helsinki',
    startTime: shiftTime({ hour: 10 }),
    endTime: shiftTime({ hour: 12 }),
  }),
  createMockShift({
    area: 'Helsinki',
    startTime: shiftTime({ hour: 16 }),
    endTime: shiftTime({ hour: 17, minutes: 30 }),
  }),
  createMockShift({
    area: 'Turku',
    startTime: shiftTime({ hour: 16 }),
    endTime: shiftTime({ hour: 17, minutes: 30 }),
  }),
  createMockShift({
    area: 'Helsinki',
    startTime: shiftTime({ hour: 11 }),
    endTime: shiftTime({ hour: 13 }),
  }),
  createMockShift({
    area: 'Helsinki',
    startTime: shiftTime({ hour: 10 }),
    endTime: shiftTime({ hour: 15 }),
  }),
  createMockShift({
    area: 'Turku',
    startTime: shiftTime({ hour: 10 }),
    endTime: shiftTime({ hour: 11, minutes: 30 }),
  }),
  createMockShift({
    area: 'Turku',
    startTime: shiftTime({ hour: 11 }),
    endTime: shiftTime({ hour: 13 }),
  }),
  createMockShift({
    area: 'Turku',
    startTime: shiftTime({ hour: 10 }),
    endTime: shiftTime({ hour: 12 }),
  }),
  createMockShift({
    area: 'Turku',
    startTime: shiftTime({ hour: 18 }),
    endTime: shiftTime({ hour: 20 }),
  }),
  createMockShift({
    area: 'Tampere',
    startTime: shiftTime({ hour: 9 }),
    endTime: shiftTime({ hour: 12 }),
  }),
  createMockShift({
    area: 'Tampere',
    startTime: shiftTime({ hour: 10 }),
    endTime: shiftTime({ hour: 12 }),
  }),
  createMockShift({
    area: 'Tampere',
    startTime: shiftTime({ hour: 12 }),
    endTime: shiftTime({ hour: 14 }),
  }),
  createMockShift({
    area: 'Tampere',
    startTime: shiftTime({ hour: 14 }),
    endTime: shiftTime({ hour: 16, minutes: 30 }),
  }),

  createMockShift({
    area: 'Helsinki',
    startTime: shiftTime({ hour: 12 }, 1),
    endTime: shiftTime({ hour: 14 }, 1),
  }),
  createMockShift({
    area: 'Helsinki',
    startTime: shiftTime({ hour: 14 }, 1),
    endTime: shiftTime({ hour: 16, minutes: 30 }, 1),
  }),
  createMockShift({
    area: 'Turku',
    startTime: shiftTime({ hour: 12 }, 1),
    endTime: shiftTime({ hour: 14 }, 1),
  }),
  createMockShift({
    area: 'Helsinki',
    startTime: shiftTime({ hour: 14 }, 1),
    endTime: shiftTime({ hour: 16, minutes: 30 }, 1),
  }),

  createMockShift({
    area: 'Turku',
    startTime: shiftTime({ hour: 9 }, 3),
    endTime: shiftTime({ hour: 10 }, 3),
  }),
  createMockShift({
    area: 'Turku',
    startTime: shiftTime({ hour: 10 }, 3),
    endTime: shiftTime({ hour: 12, minutes: 30 }, 3),
  }),
  createMockShift({
    area: 'Turku',
    startTime: shiftTime({ hour: 12, minutes: 30 }, 3),
    endTime: shiftTime({ hour: 15 }, 3),
  }),
  createMockShift({
    area: 'Helsinki',
    startTime: shiftTime({ hour: 10 }, 3),
    endTime: shiftTime({ hour: 14, minutes: 30 }, 3),
  }),
  createMockShift({
    area: 'Helsinki',
    startTime: shiftTime({ hour: 14 }, 3),
    endTime: shiftTime({ hour: 16, minutes: 30 }, 3),
  }),
  createMockShift({
    area: 'Tampere',
    startTime: shiftTime({ hour: 10 }, 3),
    endTime: shiftTime({ hour: 12 }, 3),
  }),
  createMockShift({
    area: 'Tampere',
    startTime: shiftTime({ hour: 12 }, 3),
    endTime: shiftTime({ hour: 14 }, 3),
  }),
  createMockShift({
    area: 'Tampere',
    startTime: shiftTime({ hour: 13 }, 3),
    endTime: shiftTime({ hour: 15 }, 3),
  }),

  createMockShift({
    area: 'Helsinki',
    startTime: shiftTime({ hour: 9 }, 4),
    endTime: shiftTime({ hour: 11 }, 4),
  }),
  createMockShift({
    area: 'Helsinki',
    startTime: shiftTime({ hour: 11 }, 4),
    endTime: shiftTime({ hour: 13, minutes: 30 }, 4),
  }),
  createMockShift({
    area: 'Helsinki',
    startTime: shiftTime({ hour: 12 }, 4),
    endTime: shiftTime({ hour: 15 }, 4),
  }),
  createMockShift({
    area: 'Helsinki',
    startTime: shiftTime({ hour: 18 }, 4),
    endTime: shiftTime({ hour: 21 }, 4),
  }),
  createMockShift({
    area: 'Tampere',
    startTime: shiftTime({ hour: 9 }, 4),
    endTime: shiftTime({ hour: 12 }, 4),
  }),
  createMockShift({
    area: 'Tampere',
    startTime: shiftTime({ hour: 12 }, 4),
    endTime: shiftTime({ hour: 15, minutes: 30 }, 4),
  }),
  createMockShift({
    area: 'Tampere',
    startTime: shiftTime({ hour: 15 }, 4),
    endTime: shiftTime({ hour: 18 }, 4),
  }),
  createMockShift({
    area: 'Tampere',
    startTime: shiftTime({ hour: 17 }, 4),
    endTime: shiftTime({ hour: 20 }, 4),
  }),
];
