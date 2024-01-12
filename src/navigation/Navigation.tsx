import React, { FC } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerNavigator } from './DrawerNavigator';
import { Contact } from '../screens/Contact/Contact';
import { Favourites } from '../screens/Favourites/Favourites';
import HomeIcon from '../SvgIcons/HomeIcon/HomeIcon';
import { PeopleIcon } from '../SvgIcons/PeopleIcon/PeopleIcon';

interface NavigationProps {}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: '#FFFF',
  },
};

const Stack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator theme={MyTheme}>
      <Stack.Screen name="Root" component={DrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Favourites" component={Favourites} />
    </Stack.Navigator>
  );
};

const Navigation: FC<NavigationProps> = ({}) => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tabs.Navigator>
        <Tabs.Screen
          name="Home"
          component={StackNavigator}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <HomeIcon />;
            },
          }}
        />
        <Tabs.Screen
          name="Contact"
          component={Contact}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return <PeopleIcon />;
            },
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
