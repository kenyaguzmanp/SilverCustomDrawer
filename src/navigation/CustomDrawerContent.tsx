import { DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

interface CustomDrawerContentProps {}

export const CustomDrawerContent: FC<CustomDrawerContentProps> = (props) => {
  return (
    <View {...props} style={[styles.container]}>
      <View style={styles.content}>
        <DrawerItemList {...props} />
        <DrawerItem label="Sign Out" onPress={() => alert('Are your sure?')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
});
