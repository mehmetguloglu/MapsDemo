import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {enableLatestRenderer} from 'react-native-maps';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/bussiness/redux-store';

enableLatestRenderer();
export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </Provider>
  );
}
