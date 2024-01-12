import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { FC } from 'react';
import { Dashboard } from '../screens/dashboard/Dashboard';
import { CustomDrawerContent } from './CustomDrawerContent';

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
        drawerType: 'back', // TODO: no se
        overlayColor: '1',
      }}
    >
      <Drawer.Screen name="Dashboard" component={Dashboard} />
    </Drawer.Navigator>
  );
};
