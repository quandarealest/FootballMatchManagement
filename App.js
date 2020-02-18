import { AppRegistry } from 'react';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './components/Home';
import About from './components/About';
import Add from './components/Add';

const MainNavigator = createStackNavigator({
  Home: { screen:  Home},
  About: { screen: About },
  Add: { screen: Add },
})

const App = createAppContainer(MainNavigator)

export default App;

