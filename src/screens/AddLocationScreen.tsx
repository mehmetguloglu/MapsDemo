import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useMemo, useState} from 'react';
import MapView, {LatLng, Marker} from 'react-native-maps';
import {useAppSelector, useAppDispatch} from '../bussiness/hooks';
import {setLocations} from '../bussiness/reducers/mapsReducer';
import Colors from '../components/addLocation/Colors';
import AddInput from '../components/addLocation/AddInput';
import {useNavigation, useRoute} from '@react-navigation/native';
import Header from '../components/addLocation/Header';

const AddLocationScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as any;
  const {locations} = useAppSelector(state => state.mapsReducer);

  const [coordinate, setCoordinate] = useState<LatLng | null>(null);
  const [locationName, setLocationName] = useState<string>('');
  const [color, setColor] = useState('red');
  const [editIndex, setEditIndex] = useState<number | null>(null);

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
    }
  }, [params]);

  const _handlePress = () => {
    if (editIndex != null) {
      let editLocations = [...locations];
      editLocations.splice(editIndex, 1);
      dispatch(
        setLocations([
          {name: locationName, coordinate: coordinate, color: color},
          ...editLocations,
        ]),
      );
      navigation.navigate('SavedLocationsScreen');
    } else {
      dispatch(
        setLocations([
          {name: locationName, coordinate: coordinate, color: color},
          ...locations,
        ]),
      );
    }

    setCoordinate(null);
    setLocationName('');
    setColor('red');
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
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
        <Header />
      )}
      <MapView
        minZoomLevel={3}
        onPress={e => setCoordinate(e.nativeEvent.coordinate)}
        provider="google"
        style={styles.mapView}>
        {coordinate != null ? (
          <Marker coordinate={coordinate} pinColor={color} />
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
