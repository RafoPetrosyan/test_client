/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import './src/translations/i18n.ts';

AppRegistry.registerComponent(appName, () => App);
