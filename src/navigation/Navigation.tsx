import React, { FC } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerNavigator } from './DrawerNavigator';
import { Contact } from '../screens/Contact/Contact';
import { Favourites } from '../screens/Favourites/Favourites';

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
        <Tabs.Screen name="Home" component={StackNavigator} options={{ headerShown: false }} />
        <Tabs.Screen name="Contact" component={Contact} options={{ headerShown: false }} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
