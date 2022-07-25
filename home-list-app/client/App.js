import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import AppNavigator from './navigation/AppNavigator';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store} >
      <AppNavigator />
    </Provider>
    // <Text style={styles.container}>Hey</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    
    marginVertical: 140
  },
});

//Check for watchman error after initializing terminal
