import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <AppNavigator />
    // <Text style={styles.container}>Hey</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    
    marginVertical: 140
  },
});

//Check for watchman error after initializing terminal
