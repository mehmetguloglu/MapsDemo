import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'native-base';
import {MapPinned} from 'lucide-react-native';

const HeaderRight = () => {
  const navigation = useNavigation<any>();

  const _handleNavigateRoutesPress = () => {
    navigation.navigate('DirectionsScreen');
  };

  return (
    <Pressable onPress={_handleNavigateRoutesPress} mr={3}>
      <MapPinned color="black" />
    </Pressable>
  );
};

export default HeaderRight;
