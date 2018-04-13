import uuid from 'uuid/v4';
import { DateTime } from 'luxon';

const shiftTime = dateObj => DateTime.fromObject(dateObj).valueOf();

const createMockShift = (values) => Object.assign({
  id: uuid(),
  booked: false,
}, values);

export default [
  createMockShift({
    id: 'testid',
    area: 'Helsinki',
    startTime: shiftTime({ hour: 12 }),
    endTime: shiftTime({ hour: 14 }),
  }),
];
