import React, {useCallback, useMemo, useRef, useState} from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {useAppSelector} from '../bussiness/hooks';
import {StyleSheet} from 'react-native';
import LocationDetails from '../components/directions/LocationDetails';
import ILocation from '../bussiness/types/ILocation';
import {useFocusEffect} from '@react-navigation/native';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';

const DirectionsScreen = () => {
  const {locations} = useAppSelector(state => state.mapsReducer);
  const [selectedLocation, setSelectedLocation] = useState<ILocation | null>(
    null,
  );
  const [getRoute, setGetRoute] = useState<boolean>(false);
  const [currentLocation, setCurrentLocation] =
    useState<GeolocationResponse | null>(null);
  const mapRef = useRef<MapView>(null);

  useMemo(() => {
    Geolocation.getCurrentPosition(position => setCurrentLocation(position));
  }, []);
  useFocusEffect(
    useCallback(() => {
      mapRef.current?.fitToCoordinates(
        locations.map(x => x.coordinate),
        {
          edgePadding: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20,
          },
        },
      );
    }, [locations]),
  );

  const _handleShowLocationPress = (item: ILocation) => {
    setSelectedLocation({
      name: item.name,
      coordinate: item.coordinate,
      pinColor: item.pinColor,
    });
    setGetRoute(false);
  };
  const _handleGetRoutesPress = () => {
    setGetRoute(true);
    if (currentLocation && selectedLocation) {
      mapRef.current?.fitToCoordinates(
        [
          {
            longitude: currentLocation.coords.longitude,
            latitude: currentLocation.coords.latitude,
          },
          {
            longitude: selectedLocation.coordinate.longitude,
            latitude: selectedLocation.coordinate.latitude,
          },
        ],
        {
          edgePadding: {
            bottom: 20,
            left: 20,
            right: 20,
            top: 20,
          },
        },
      );
    }
  };
  return (
    <>
      {selectedLocation != null ? (
        <LocationDetails
          onGetRoute={_handleGetRoutesPress}
          selectedLocation={selectedLocation}
        />
      ) : null}
      <MapView
        ref={mapRef}
        showsMyLocationButton={true}
        showsUserLocation={true}
        maxZoomLevel={15}
        style={styles.mapView}
        provider="google">
        {locations.map(item => (
          <Marker
            onPress={() => _handleShowLocationPress(item)}
            key={item.name}
            coordinate={item.coordinate}
            pinColor={item.pinColor}
          />
        ))}
        {getRoute && selectedLocation && currentLocation ? (
          <Polyline
            coordinates={[
              {
                latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude,
              },
              selectedLocation.coordinate,
            ]}
            strokeColor="#000"
            strokeWidth={3}
          />
        ) : null}
      </MapView>
    </>
  );
};

export default DirectionsScreen;
const styles = StyleSheet.create({
  mapView: {
    flex: 1,
  },
});
