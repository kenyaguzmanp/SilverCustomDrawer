import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerSceneWrapper } from '../../components/DrawerSceneWrapper/DrawerSceneWrapper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Menu } from '../../components/Menu/Menu';

interface StartProps {}

export const Start: FC<StartProps> = ({ navigation }) => {
  const { openDrawer } = navigation;
  return (
    <DrawerSceneWrapper>
      <View style={styles.container}>
        <SafeAreaView>
          <Menu title="Start" onPress={openDrawer} />
        </SafeAreaView>
      </View>
    </DrawerSceneWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
