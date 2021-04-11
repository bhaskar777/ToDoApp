import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigation from './src/Screens/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <StackNavigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
