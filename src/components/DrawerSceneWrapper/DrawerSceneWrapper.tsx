import { useDrawerProgress } from '@react-navigation/drawer';
import React, { FC } from 'react';
import { Platform, StyleSheet, useWindowDimensions } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { colors } from '../../theme';

interface DrawerSceneWrapperProps {}

export const DrawerSceneWrapper: FC<DrawerSceneWrapperProps> = ({ children }) => {
  const progress = useDrawerProgress();

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
          [0, Platform.OS === 'android' ? 30 : 50],
          'clamp'
        ),
      },
      {
        translateY: interpolate(
          progress.value,
          [0, 1],
          [0, Platform.OS === 'android' ? 30 : 50],
          'clamp'
        ),
      },
    ],
    borderRadius: interpolate(progress.value, [0, 1], [0, 20], 'clamp'),
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
    backgroundColor: colors.darkBlue,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 20,
  },
});
