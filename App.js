import { AppRegistry } from 'react';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createStore, combineReducers } from 'react-redux';
import { Provider } from 'react-redux/native';

import Home from './Home';
import About from './About';
import Add from './Add';

const MainNavigator = createStackNavigator({
  Home: { screen:  Home},
  About: { screen: About },
  Add: { screen: Add },
})

const App = createAppContainer(MainNavigator)

export default App
