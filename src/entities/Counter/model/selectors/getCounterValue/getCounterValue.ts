import { createSelector } from '@reduxjs/toolkit';

import { getCounter } from '../getCounter/getCounter';
import { CounterSchema } from '../../types/counterSchema';

// prettier-ignore
export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value,
);
