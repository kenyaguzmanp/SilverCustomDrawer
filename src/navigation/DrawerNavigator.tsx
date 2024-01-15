import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { FC } from 'react';
import { CustomDrawerContent } from './CustomDrawerContent';
import { YourCart } from '../screens/YourCart/YourCart';
import { Favourites } from '../screens/Favourites/Favourites';
import { YourOrders } from '../screens/YourOrders/YourOrders';
import { colors } from '../theme';
import { TabsNavigator } from './TabsNavigator';

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
        drawerLabelStyle: {
          color: colors.white,
          fontSize: 18,
          paddingLeft: 10,
        },
        drawerActiveBackgroundColor: colors.darkRed1,
        drawerItemStyle: {
          borderRadius: 15,
        },
        headerShown: false,
        drawerType: 'back',
        overlayColor: '1',
      }}
      initialRouteName="Start"
    >
      <Drawer.Screen component={TabsNavigator} name={'Start'} />
      <Drawer.Screen component={YourCart} name={'Your Cart'} />
      <Drawer.Screen component={Favourites} name={'Favourites'} />
      <Drawer.Screen component={YourOrders} name={'Your Orders'} />
    </Drawer.Navigator>
  );
};
