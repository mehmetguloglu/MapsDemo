import {View, StyleSheet} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

const LocationScreen = () => {
  return (
    <View style={{flex: 1}}>
      <MapView provider="google" style={{...StyleSheet.absoluteFillObject}} />
    </View>
  );
};

export default LocationScreen;
