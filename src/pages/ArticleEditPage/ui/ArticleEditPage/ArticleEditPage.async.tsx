import { lazy } from 'react';

// export const ArticleEditPageAsync = lazy(() => import("./ArticleEditPage"));

// Just Testing Loader, will delete in the future
export const ArticleEditPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./ArticleEditPage')), 400);
    })
);
