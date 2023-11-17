import React from 'react';
import {Stack, Text} from 'native-base';

const Header = () => {
  return (
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
  );
};

export default Header;
