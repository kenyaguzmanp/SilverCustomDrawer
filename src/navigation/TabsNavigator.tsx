import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { Contact } from '../screens/Contact/Contact';
import { PeopleIcon } from '../SvgIcons/PeopleIcon/PeopleIcon';
import HomeIcon from '../SvgIcons/HomeIcon/HomeIcon';
import { HomeStack } from './HomeStack';
import { useDrawerStatus } from '@react-navigation/drawer';

interface TabsNavigatorProps {}

const Tabs = createBottomTabNavigator();

export const TabsNavigator: FC<TabsNavigatorProps> = ({}) => {
  const isDrawerOpen = useDrawerStatus() === 'open';

  const shouldShowTabBar = isDrawerOpen ? 'none' : 'flex';

  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <HomeIcon />;
          },
          tabBarStyle: {
            display: shouldShowTabBar,
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
          tabBarStyle: {
            display: shouldShowTabBar,
          },
        }}
      />
    </Tabs.Navigator>
  );
};
