import { lazy } from 'react';

// export const ArticlesPageAsync = lazy(() => import("./ArticlesPage"));

// Just Testing Loader, will delete in the future
export const ArticlesPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./ArticlesPage')), 1500);
    })
);
