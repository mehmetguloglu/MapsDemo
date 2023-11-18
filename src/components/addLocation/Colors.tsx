import React from 'react';
import {Pressable, Stack} from 'native-base';

const colors = [
  'red',
  'tomato',
  'orange',
  'wheat',
  'linen',
  'green',
  'turquoise',
];
const Colors = ({
  setColor,
}: {
  setColor: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Stack pb={3} mx={4} justifyContent={'space-between'} direction={'row'}>
      {colors.map(item => (
        <Pressable
          key={item}
          onPress={() => {
            setColor(item);
          }}
          width={30}
          height={30}
          borderRadius={20}
          style={{backgroundColor: item}}
        />
      ))}
    </Stack>
  );
};

export default Colors;
