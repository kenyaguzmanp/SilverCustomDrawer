import { useDrawerProgress } from '@react-navigation/drawer';
import React, { FC } from 'react';
import { Platform, StyleSheet, useWindowDimensions } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';

interface DrawerSceneWrapperProps {}

export const DrawerSceneWrapper: FC<DrawerSceneWrapperProps> = ({ children }) => {
  const progress = useDrawerProgress();
  const { width } = useWindowDimensions();

  const contentAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotateY: `${interpolate(progress.value, [0, 1], [0, -10], 'clamp')}deg`,
      },
      {
        rotate: `${interpolate(progress.value, [0, 1], [0, -7], 'clamp')}deg`,
      },
      {
        translateX: interpolate(
          progress.value,
          [0, 1],
          [0, Platform.OS === 'android' ? width - 130 : 50],
          'clamp'
        ),
      },
      {
        translateY: interpolate(
          progress.value,
          [0, 1],
          [0, Platform.OS === 'android' ? width - 130 : 50],
          'clamp'
        ),
      },
    ],
    borderRadius: interpolate(progress.value, [0, 1], [0, 50], 'clamp'),
    overflow: 'hidden',
  }));

  const wrapperAnimatedStyle = useAnimatedStyle(() => ({
    marginTop: interpolate(progress.value, [0, 1], [0, 50], 'clamp'),
  }));

  return (
    <Animated.View style={[styles.container, wrapperAnimatedStyle]}>
      <Animated.View style={[styles.content, contentAnimatedStyle]}>{children}</Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  content: {
    flex: 1,
    backgroundColor: 'cyan',
  },
});
