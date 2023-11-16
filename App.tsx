import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {enableLatestRenderer} from 'react-native-maps';
import Navigation from './src/navigation';

enableLatestRenderer();
export default function App() {
  return (
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
  );
}
