import { DrawerItem, DrawerItemList, useDrawerProgress } from '@react-navigation/drawer';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';

interface CustomDrawerContentProps {}

export const CustomDrawerContent: FC<CustomDrawerContentProps> = (props) => {
  const progress = useDrawerProgress();

  const contentAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(progress.value, [0, 1], [-100, 0], 'clamp'),
      },
    ],
    borderTopLeftRadius: interpolate(progress.value, [0, 1], [0, 20], 'clamp'),
    overflow: 'hidden',
  }));

  const wrapperAnimatedStyle = useAnimatedStyle(() => ({
    marginTop: interpolate(progress.value, [0, 1], [0, 50], 'clamp'),
  }));

  return (
    <Animated.View {...props} style={[styles.container, wrapperAnimatedStyle]}>
      <Animated.View style={[styles.content, contentAnimatedStyle]}>
        <DrawerItemList {...props} />
        <DrawerItem label="Sign Out" onPress={() => alert('Are your sure?')} />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
});
