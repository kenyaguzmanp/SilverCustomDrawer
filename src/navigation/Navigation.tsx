import React, { FC } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerNavigator } from './DrawerNavigator';

interface NavigationProps {}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: '#FFFF',
  },
};

const Feed = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Feed Screen</Text>
      <Button title="Go to Root" onPress={() => navigation.navigate('Root')} />
      <Button
        title="Go to Root, Profile"
        onPress={() => navigation.navigate('Root', { screen: 'Profile' })}
      />
    </View>
  );
};

const Stack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator theme={MyTheme}>
      <Stack.Screen name="Root" component={DrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
};

const Navigation: FC<NavigationProps> = ({}) => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={StackNavigator} options={{ headerShown: false }} />
        <Tabs.Screen name="Feed" component={Feed} options={{ headerShown: false }} />
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
