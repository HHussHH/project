import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((responce) => {
  // @ts-ignore
  setTimeout(() => responce(import('./MainPage')), 1500);
}));
