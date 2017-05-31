import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import Splash from './Splash';
import Login from './src/components/Login/Login';
import Principal from './src/components/Login/Principal';
import {StackNavigator, Button, TabNavigator, } from 'react-navigation';

const App = StackNavigator({
  Login: {
    screen: Login
  },
  Principal: {
    screen: Principal
  }
});
export default class AwesomeProject extends Component {

  render() {
    return (
      <Login/>

    );
  }
}



AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
