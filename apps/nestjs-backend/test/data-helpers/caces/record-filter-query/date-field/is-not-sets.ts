/* eslint-disable sonarjs/no-duplicate-string */
import {
  daysAgo,
  daysFromNow,
  exactDate,
  isNot,
  oneMonthAgo,
  oneMonthFromNow,
  oneWeekAgo,
  oneWeekFromNow,
  today,
  tomorrow,
  yesterday,
} from '@teable/core';

export const IS_NOT_SETS = [
  {
    fieldIndex: 3,
    operator: isNot.value,
    queryValue: {
      mode: today.value,
      timeZone: 'Asia/Singapore',
    },
    expectResultLength: 22,
  },
  {
    fieldIndex: 3,
    operator: isNot.value,
    queryValue: {
      mode: tomorrow.value,
      timeZone: 'Asia/Singapore',
    },
    expectResultLength: 22,
  },
  {
    fieldIndex: 3,
    operator: isNot.value,
    queryValue: {
      mode: yesterday.value,
      timeZone: 'Asia/Singapore',
    },
    expectResultLength: 22,
  },
  {
    fieldIndex: 3,
    operator: isNot.value,
    queryValue: {
      mode: oneWeekAgo.value,
      timeZone: 'Asia/Singapore',
    },
    expectResultLength: 22,
  },
  {
    fieldIndex: 3,
    operator: isNot.value,
    queryValue: {
      mode: oneWeekFromNow.value,
      timeZone: 'Asia/Singapore',
    },
    expectResultLength: 22,
  },
  {
    fieldIndex: 3,
    operator: isNot.value,
    queryValue: {
      mode: oneMonthAgo.value,
      timeZone: 'Asia/Singapore',
    },
    expectResultLength: 22,
  },
  {
    fieldIndex: 3,
    operator: isNot.value,
    queryValue: {
      mode: oneMonthFromNow.value,
      timeZone: 'Asia/Singapore',
    },
    expectResultLength: 22,
  },
  {
    fieldIndex: 3,
    operator: isNot.value,
    queryValue: {
      mode: daysAgo.value,
      numberOfDays: 1,
      timeZone: 'Asia/Singapore',
    },
    expectResultLength: 22,
  },
  {
    fieldIndex: 3,
    operator: isNot.value,
    queryValue: {
      mode: daysFromNow.value,
      numberOfDays: 1,
      timeZone: 'Asia/Singapore',
    },
    expectResultLength: 22,
  },
  {
    fieldIndex: 3,
    operator: isNot.value,
    queryValue: {
      mode: exactDate.value,
      exactDate: '2019-12-31T16:00:00.000Z',
      timeZone: 'Asia/Singapore',
    },
    expectResultLength: 22,
  },
];

export const LOOKUP_IS_NOT_SETS = [
  {
    operator: isNot.value,
    queryValue: {
      mode: today.value,
      timeZone: 'Asia/Singapore',
    },
    expectResultLength: 20,
  },
  {
    operator: isNot.value,
    queryValue: {
      mode: tomorrow.value,
      timeZone: 'Asia/Singapore',
    },
    expectResultLength: 20,
  },
  {
    operator: isNot.value,
    queryValue: {
      mode: yesterday.value,
      timeZone: 'Asia/Singapore',
    },
    expectResultLength: 19,
  },
  {
    operator: isNot.value,
    queryValue: {
      mode: oneWeekAgo.value,
      timeZone: 'Asia/Singapore',
    },
    expectResultLength: 20,
  },
  {
    operator: isNot.value,
    queryValue: {
      mode: oneWeekFromNow.value,
      timeZone: 'Asia/Singapore',
    },
    expectResultLength: 20,
  },
  {
    operator: isNot.value,
    queryValue: {
      mode: oneMonthAgo.value,
      timeZone: 'Asia/Singapore',
    },
    expectResultLength: 20,
  },
  {
    operator: isNot.value,
    queryValue: {
      mode: oneMonthFromNow.value,
      timeZone: 'Asia/Singapore',
    },
    expectResultLength: 20,
  },
  {
    operator: isNot.value,
    queryValue: {
      mode: daysAgo.value,
      numberOfDays: 1,
      timeZone: 'Asia/Singapore',
    },
    expectResultLength: 19,
  },
  {
    operator: isNot.value,
    queryValue: {
      mode: daysFromNow.value,
      numberOfDays: 1,
      timeZone: 'Asia/Singapore',
    },
    expectResultLength: 20,
  },
  {
    operator: isNot.value,
    queryValue: {
      mode: exactDate.value,
      exactDate: '2019-12-31T16:00:00.000Z',
      timeZone: 'Asia/Singapore',
    },
    expectResultLength: 16,
  },
];
