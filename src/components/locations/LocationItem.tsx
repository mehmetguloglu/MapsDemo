import React, {useState} from 'react';
import {ChevronRight, MapPin} from 'lucide-react-native';
import {Stack, Text, Pressable} from 'native-base';

const LocationItem = ({name, coordinate, color}) => {
  const [showCoordinate, setShowCoordinate] = useState<boolean>(false);

  const _handleShowCoordinate = () => setShowCoordinate(!showCoordinate);

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
      <Pressable>
        <ChevronRight />
      </Pressable>
    </Stack>
  );
};

export default LocationItem;
