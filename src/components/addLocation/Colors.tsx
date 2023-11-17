import React from 'react';
import {Button, Stack} from 'native-base';

const colors = ['blue', 'green', 'red', 'yellow', 'orange', 'purple', 'gray'];
const Colors = ({
  setColor,
}: {
  setColor: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Stack pb={3} mx={4} justifyContent={'space-between'} direction={'row'}>
      {colors.map(item => (
        <Button
          key={item}
          onPress={() => setColor(item)}
          width={30}
          height={30}
          borderRadius={20}
          colorScheme={item}
        />
      ))}
    </Stack>
  );
};

export default Colors;
