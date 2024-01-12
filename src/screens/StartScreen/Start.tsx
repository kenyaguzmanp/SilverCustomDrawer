import React, { FC } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { DrawerSceneWrapper } from '../../components/DrawerSceneWrapper/DrawerSceneWrapper';
import { colors } from '../../theme';

interface StartProps {}

export const Start: FC<StartProps> = ({ navigation }) => {
  const { openDrawer } = navigation;
  return (
    <DrawerSceneWrapper>
      <View style={styles.container}>
        <Text>Start</Text>
        <Button title="button" onPress={openDrawer} />
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
