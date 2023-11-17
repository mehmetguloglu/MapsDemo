import React, {useState} from 'react';
import {ChevronRight, MapPin} from 'lucide-react-native';
import {Stack, Text, Pressable} from 'native-base';
import {LatLng} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';

const LocationItem = ({
  name,
  coordinate,
  color,
  index,
}: {
  name: string;
  coordinate: LatLng;
  color: string;
  index: Number;
}) => {
  const [showCoordinate, setShowCoordinate] = useState<boolean>(false);

  const navigation = useNavigation();

  const _handleShowCoordinate = () => setShowCoordinate(!showCoordinate);

  const _handleEditCoodinate = () => {
    navigation.navigate('AddLocationScreen', {
      editName: name,
      editCoordinate: coordinate,
      editColor: color,
      index: index,
    });
  };

  return (
    <Stack
      justifyContent={'space-between'}
      alignItems={'center'}
      direction={'row'}
      p={4}
      bg={'white'}
      my={0.5}>
      <Stack alignItems={'center'} direction={'row'}>
        <Pressable p={3} onPress={_handleShowCoordinate}>
          <MapPin color={color} />
        </Pressable>
        <Stack>
          <Text fontSize={15} fontWeight={'600'}>
            {name}
          </Text>
          {showCoordinate ? (
            <Text fontSize={11}>
              {coordinate.latitude},{coordinate.longitude}
            </Text>
          ) : null}
        </Stack>
      </Stack>
      <Pressable onPress={_handleEditCoodinate}>
        <ChevronRight />
      </Pressable>
    </Stack>
  );
};

export default LocationItem;
