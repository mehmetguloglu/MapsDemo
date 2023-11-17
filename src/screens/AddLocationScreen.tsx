import {SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import MapView, {LatLng, Marker} from 'react-native-maps';
import {Stack, Text} from 'native-base';
import {useAppSelector, useAppDispatch} from '../bussiness/hooks';
import {setLocations} from '../bussiness/reducers/mapsReducer';
import Colors from '../components/addLocation/Colors';
import AddInput from '../components/addLocation/AddInput';

const LocationScreen = () => {
  const dispatch = useAppDispatch();
  const {locations} = useAppSelector(state => state.mapsReducer);
  const [coordinate, setCoordinate] = useState<LatLng | null>(null);
  const [locationName, setLocationName] = useState<string>('');
  const [color, setColor] = useState('red');
  const _handlePress = () => {
    dispatch(
      setLocations([
        ...locations,
        {name: locationName, coordinate: coordinate, color: color},
      ]),
    );
    setCoordinate(null);
    setLocationName('');
    setColor('red');
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {coordinate ? (
        <>
          <AddInput
            locationName={locationName}
            setLocationName={setLocationName}
            onPress={_handlePress}
          />
          <Colors setColor={setColor} />
        </>
      ) : (
        <Stack
          width={'100%'}
          alignItems={'center'}
          zIndex={999}
          top={6}
          position={'absolute'}>
          <Stack bgColor={'white'} px={2} py={1} opacity={1} borderRadius={10}>
            <Text fontSize={16} fontWeight={'700'} color={'black'}>
              Konum Ekle
            </Text>
          </Stack>
        </Stack>
      )}
      <MapView
        minZoomLevel={5}
        onPress={e => setCoordinate(e.nativeEvent.coordinate)}
        provider="google"
        style={{flex: 1}}>
        {coordinate != null ? (
          <Marker coordinate={coordinate} pinColor={color} />
        ) : null}
      </MapView>
    </SafeAreaView>
  );
};

export default LocationScreen;
