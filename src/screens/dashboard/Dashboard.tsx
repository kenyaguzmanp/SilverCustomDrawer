import React, { FC } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface DashboardProps {}

export const Dashboard: FC<DashboardProps> = ({ navigation }) => {
  const { openDrawer } = navigation;
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <Button title="button" onPress={openDrawer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: 'cyan',
  },
});
