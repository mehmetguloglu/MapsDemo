import {configureStore} from '@reduxjs/toolkit';
import mapsReducer from './reducers/mapsReducer';

export const store = configureStore({
  reducer: {
    mapsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
