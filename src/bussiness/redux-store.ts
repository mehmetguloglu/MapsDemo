import {combineReducers, configureStore} from '@reduxjs/toolkit';
import mapsReducer from './reducers/mapsReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  REGISTER,
  PURGE,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['mapsReducer'],
};
const mapsPersistConfig = {
  key: 'maps',
  storage: AsyncStorage,
  whiteList: ['locations'],
};

const rootReducer = combineReducers({
  mapsReducer: persistReducer(mapsPersistConfig, mapsReducer),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddware => {
    return getDefaultMiddware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
