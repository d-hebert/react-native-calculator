import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calvin from './components/Calvin';
import BlinkApp from './components/Blink';
import Calculator from './components/Calculator';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <BlinkApp />
      <Calvin /> */}
      <Calculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
