import { configureStore } from '@reduxjs/toolkit';
import { dalleCoreApi } from './services/dalleCoreApi';

export const store = configureStore({
    reducer: {
        [dalleCoreApi.reducerPath]: dalleCoreApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dalleCoreApi.middleware),
});