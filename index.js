/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppNavigator from './src/navigator/navigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
