import { registerRootComponent } from 'expo';
import { LogBox } from 'react-native';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// Ignore log notification by message:
LogBox.ignoreLogs(['You are now..']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();

registerRootComponent(App);
