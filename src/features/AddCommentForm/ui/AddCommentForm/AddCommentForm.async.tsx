import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

// export const AddCommentFormAsync = lazy(() => import("./AddCommentForm"));

// Just Testing Loader, will delete in the future
export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./AddCommentForm')), 1500);
    })
);
