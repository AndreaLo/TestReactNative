import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } rom 'react-native-elements';

import Login from 'components/Login/Login.js';
import Principal from 'components/Login/Principal.js;

export const Tabs = TabNavigator({
  Login: {
    pantalla: Login
  },
  Principal: {
    screen: Principal,
  }
})
