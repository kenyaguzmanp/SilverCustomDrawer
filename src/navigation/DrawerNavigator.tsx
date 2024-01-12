import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { FC } from 'react';
import { Dashboard } from '../screens/dashboard/Dashboard';
import { CustomDrawerContent } from './CustomDrawerContent';
import { Start } from '../screens/StartScreen/Start';
import { YourCart } from '../screens/YourCart/YourCart';
import { Favourites } from '../screens/Favourites/Favourites';
import { YourOrders } from '../screens/YourOrders/YourOrders';
import { Text } from 'react-native';

interface DrawerNavigatorProps {}

const Drawer = createDrawerNavigator();

export const DrawerNavigator: FC<DrawerNavigatorProps> = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          width: '50%',
        },
        headerShown: false,
        drawerType: 'back',
        overlayColor: '1',
      }}
      initialRouteName="Start"
    >
      <Drawer.Screen name="Start" component={Start} />
      <Drawer.Screen name="YourCart" component={YourCart} />
      <Drawer.Screen name="Favourites" component={Favourites} />
      <Drawer.Screen name="YourOrders" component={YourOrders} />
    </Drawer.Navigator>
  );
};
