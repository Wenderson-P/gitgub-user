import React from 'react';

import {StyleSheet, View, Text} from 'react-native';
import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});
console.tron.log('Hello world');

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
    </View>
  );
}
