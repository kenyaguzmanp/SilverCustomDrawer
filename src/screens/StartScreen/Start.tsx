import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { DrawerSceneWrapper } from '../../../components/DrawerSceneWrapper/DrawerSceneWrapper';

interface StartProps {}

export const Start: FC<StartProps> = ({}) => {
  return (
    <DrawerSceneWrapper>
      <View>
        <Text>Start</Text>
      </View>
    </DrawerSceneWrapper>
  );
};
