import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// console.disableYellowBox = true;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: 'center',
    justifyContent: 'center',
    // fontSize: '60',  // not working yet... circle back on this later in the course.
  },
});
