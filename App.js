import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calvin from './components/Calvin';
import BlinkApp from './components/Blink';
import Calculator from './components/Calculator';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        {/* <BlinkApp />
        <Calvin /> */}
        <Calculator />
      </View>
    </PaperProvider>
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
