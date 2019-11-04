import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
    </View>
  );
}
