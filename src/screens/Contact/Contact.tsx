import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ContactProps {}

export const Contact: FC<ContactProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Contact</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
