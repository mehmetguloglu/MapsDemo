import {Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import React, {useMemo, useRef, useState} from 'react';
import MapView, {LatLng, Marker} from 'react-native-maps';
import {useAppSelector, useAppDispatch} from '../bussiness/hooks';
import {setLocations} from '../bussiness/reducers/mapsReducer';
import Colors from '../components/addLocation/Colors';
import AddInput from '../components/addLocation/AddInput';
import {useNavigation, useRoute} from '@react-navigation/native';
import Header from '../components/addLocation/Header';
import {Button, Stack, Text} from 'native-base';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const AddLocationScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const route = useRoute();
  const params = route.params as any;
  const {locations} = useAppSelector(state => state.mapsReducer);

  const [coordinate, setCoordinate] = useState<LatLng | undefined>(undefined);
  const [locationName, setLocationName] = useState<string>('');
  const [color, setColor] = useState('red');
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [currentLocation, setCurrentLocation] =
    useState<GeolocationResponse | null>(null);
  const mapRef = useRef<MapView>(null);

  useMemo(() => {
    Geolocation.getCurrentPosition(position => setCurrentLocation(position));
  }, []);

  useMemo(() => {
    if (params?.editName) {
      const {
        editName,
        editCoordinate,
        editColor,
        index,
      }: {
        editName: string;
        editCoordinate: LatLng;
        editColor: string;
        index: number;
      } = params;
      setCoordinate(editCoordinate);
      setLocationName(editName);
      setColor(editColor);
      setEditIndex(index);
      if (editCoordinate) {
        mapRef.current?.fitToCoordinates([editCoordinate]);
      }
    }
  }, [params]);

  const _handlePress = () => {
    if (coordinate) {
      if (editIndex != null) {
        let editLocations = [...locations];
        editLocations.splice(editIndex, 1);
        dispatch(
          setLocations([
            {name: locationName, coordinate: coordinate, pinColor: color},
            ...editLocations,
          ]),
        );
      } else {
        dispatch(
          setLocations([
            {name: locationName, coordinate: coordinate, pinColor: color},
            ...locations,
          ]),
        );
      }
      setEditIndex(null);
      setCoordinate(undefined);
      setLocationName('');
      setColor('red');
      navigation.navigate('SavedLocationsScreen');
    }
  };

  const _handleDeletePress = () => {
    if (editIndex != null) {
      let editLocations = [...locations];
      editLocations.splice(editIndex, 1);
      dispatch(setLocations([...editLocations]));

      setCoordinate(undefined);
      setLocationName('');
      setColor('red');
    }
    navigation.navigate('SavedLocationsScreen');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {coordinate ? (
        <>
          <Stack px={4} py={2} direction={'row'}>
            <AddInput
              locationName={locationName}
              setLocationName={setLocationName}
              onPress={_handlePress}
            />
            {editIndex != null ? (
              <Button onPress={_handleDeletePress} my={3} size={'md'}>
                <Text color={'white'} bold>
                  Sil
                </Text>
              </Button>
            ) : null}
          </Stack>
          <Colors setColor={setColor} />
        </>
      ) : (
        <Header />
      )}
      <MapView
        ref={mapRef}
        initialRegion={
          editIndex != null && coordinate
            ? {
                latitude: coordinate.latitude,
                longitude: coordinate.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }
            : currentLocation
            ? {
                latitude: currentLocation?.coords.latitude,
                longitude: currentLocation?.coords.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }
            : undefined
        }
        maxZoomLevel={15}
        showsMyLocationButton={true}
        showsUserLocation={true}
        onPress={e => {
          setCoordinate(e.nativeEvent.coordinate);
        }}
        provider="google"
        style={styles.mapView}>
        {coordinate != null ? (
          <Marker key={color} coordinate={coordinate} pinColor={color} />
        ) : null}
      </MapView>
    </SafeAreaView>
  );
};

export default AddLocationScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  mapView: {
    flex: 1,
  },
});
