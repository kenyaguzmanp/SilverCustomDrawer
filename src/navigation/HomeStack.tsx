import React, { FC } from 'react';
import { Start } from '../screens/StartScreen/Start';
import { Favourites } from '../screens/Favourites/Favourites';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

interface HomeStackProps {}

const Stack = createNativeStackNavigator();

export const HomeStack: FC<HomeStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={Start} options={{ headerShown: false }} />
      <Stack.Screen name="Favourites" component={Favourites} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
