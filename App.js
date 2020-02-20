import React from 'react';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { Provider } from 'react-redux';

import Home from './components/Home';
import About from './components/About';
import Add from './containers/Add';

import configureStore from './store/configureStore';

const store = configureStore();

const MainNavigator = createStackNavigator({
  Home: { screen:  Home},
  About: { screen: About },
  Add: { screen: Add },
})

const App = createAppContainer(MainNavigator)

export default class rootApp extends React.Component {
  render(){
    return (
    <Provider store = { store }>
      <App />
    </Provider>
    )
  }
}


