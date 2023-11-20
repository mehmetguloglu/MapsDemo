import React from 'react';
import {Pressable, Stack, Text} from 'native-base';
import {MapPin} from 'lucide-react-native';
import ILocation from '../../bussiness/types/ILocation';

const LocationDetails = ({
  selectedLocation,
  onGetRoute,
}: {
  selectedLocation: ILocation;
  onGetRoute: (item: ILocation) => void;
}) => {
  const {name, coordinate, pinColor} = selectedLocation;
  const {latitude, longitude} = coordinate;
  return (
    <Stack
      width={'100%'}
      alignItems={'center'}
      position={'absolute'}
      zIndex={999}
      top={0}
      justifyContent={'center'}>
      <Stack
        direction={'row'}
        p={3}
        mt={2}
        borderRadius={10}
        bgColor={'white'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Stack>
          <Text fontSize={16} fontWeight={'600'}>
            {name}
          </Text>
          <Text fontSize={11}>
            {latitude},{longitude}
          </Text>
        </Stack>
        <Pressable
          onPress={() => onGetRoute(selectedLocation)}
          bgColor={'white'}
          borderColor={pinColor}
          borderRadius={10}
          borderWidth={1}
          p={3}
          alignItems={'center'}
          justifyContent={'center'}
          ml={2}>
          <MapPin color={pinColor} />
          <Text>Rota</Text>
        </Pressable>
      </Stack>
    </Stack>
  );
};

export default LocationDetails;
