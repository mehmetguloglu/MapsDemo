import React from 'react';
// 1. import `NativeBaseProvider` component
import {NativeBaseProvider, Text, Box} from 'native-base';
import MapView, {enableLatestRenderer} from 'react-native-maps';
import {StyleSheet} from 'react-native';

// enableLatestRenderer();
export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <MapView style={{...StyleSheet.absoluteFillObject}} />
    </NativeBaseProvider>
  );
}
