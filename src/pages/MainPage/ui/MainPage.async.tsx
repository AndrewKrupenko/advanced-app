import { lazy } from "react";

//export const MainPageAsync = lazy(() => import("./MainPage"));

// Just Testing Loader, will delete in the future
export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import("./MainPage")), 1500);
    })
);
