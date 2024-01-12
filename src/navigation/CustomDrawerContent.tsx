import { DrawerItem, DrawerItemList, useDrawerProgress } from '@react-navigation/drawer';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { colors, getMarginTopInterpolationAnimation } from '../theme';

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
        <Text style={styles.title}>Beka</Text>
        <View style={styles.itemsContainer}>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Sign Out"
            labelStyle={styles.itemDrawerLabel}
            onPress={() => alert('Are your sure?')}
          />
        </View>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  title: {
    paddingTop: 80,
    paddingBottom: 40,
    paddingHorizontal: 25,
    alignSelf: 'center',
    color: colors.white,
    fontSize: 25,
    fontWeight: '900',
  },
  itemDrawerLabel: {
    color: colors.white,
    paddingVertical: 30,
    fontSize: 18,
    paddingLeft: 10,
  },
  itemsContainer: {
    padding: 10,
  },
});
