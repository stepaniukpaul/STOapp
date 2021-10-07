import React from 'react';
import { View, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import LoginScreen from './src/modules/login/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
