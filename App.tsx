import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {enableLatestRenderer} from 'react-native-maps';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import {persistor, store} from './src/bussiness/redux-store';
import {PersistGate} from 'redux-persist/integration/react';

enableLatestRenderer();
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <Navigation />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}
