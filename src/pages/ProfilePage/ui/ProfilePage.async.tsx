import { lazy } from 'react';

export const ProfilePageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // ONLY FOR TESTING PURPOSE
      setTimeout(() => resolve(import('./ProfilePage')), 1500);
    })
);
