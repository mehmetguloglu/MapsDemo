import React from 'react';
import {useAppSelector} from '../bussiness/hooks';
import {FlatList} from 'native-base';
import LocationItem from '../components/locations/LocationItem';

const SavedLocationsScreen = () => {
  const {locations} = useAppSelector(state => state.mapsReducer);

  return (
    <FlatList
      data={locations}
      keyExtractor={({name}) => name}
      renderItem={({item, index}) => (
        <LocationItem
          name={item.name}
          coordinate={item.coordinate}
          color={item.color}
          index={index}
        />
      )}
    />
  );
};

export default SavedLocationsScreen;
