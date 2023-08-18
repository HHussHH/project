import {lazy} from "react";

export const AboutPageAsync = lazy(() => new Promise(responce => {
    // @ts-ignore
    setTimeout(() => responce(import('./AboutPage')), 1500);
}))