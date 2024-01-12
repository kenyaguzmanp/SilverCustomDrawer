import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from './src/navigation/Navigation';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Navigation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: 'cyan',
  },
});

export default App;
