import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerSceneWrapper } from '../../components/DrawerSceneWrapper/DrawerSceneWrapper';
import { colors } from '../../theme';

interface YourOrdersProps {}

export const YourOrders: FC<YourOrdersProps> = ({}) => {
  return (
    <DrawerSceneWrapper>
      <View style={styles.container}>
        <Text>YourOrders</Text>
      </View>
    </DrawerSceneWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: colors.white,
  },
});
