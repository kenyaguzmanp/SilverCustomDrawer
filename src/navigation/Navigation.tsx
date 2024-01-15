import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from '../theme';
import { DrawerNavigator } from './DrawerNavigator';

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
  return (
    <NavigationContainer theme={theme}>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
