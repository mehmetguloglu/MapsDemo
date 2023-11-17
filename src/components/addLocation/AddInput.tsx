import React from 'react';
import {Stack, Input, Button, Text} from 'native-base';

const AddInput = ({
  locationName,
  setLocationName,
  onPress,
}: {
  locationName: string;
  setLocationName: React.Dispatch<React.SetStateAction<string>>;
  onPress: () => void;
}) => {
  return (
    <Stack px={15} py={3} direction={'row'}>
      <Input
        onChangeText={e => setLocationName(e)}
        value={locationName}
        flex={1}
        size="md"
        bg={'white'}
        placeholder="İsim Ver"
      />
      <Button
        disabled={locationName === ''}
        backgroundColor={locationName === '' ? 'gray.400' : 'blue.500'}
        ml={2}
        size={'sm'}
        onPress={onPress}>
        <Text bold color={'white'}>
          Kaydet
        </Text>
      </Button>
    </Stack>
  );
};

export default AddInput;
