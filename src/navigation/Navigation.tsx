import React, { FC } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerNavigator } from './DrawerNavigator';
import { Contact } from '../screens/Contact/Contact';

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
      <Stack.Screen name="Contact" component={Contact} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Navigation;
