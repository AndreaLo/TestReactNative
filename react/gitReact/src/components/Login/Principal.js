
import React, {Component} from 'react';
import ReactNative, {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Button
} from 'react-native';
import {StackNavigator, Button, TabNavigator, } from 'react-navigation';
class Principal extends React.Component {
  static navigationOptions = {
    title: 'Principal',
  };
  render() {
    return (
      <View>
        <Text>Ya te has logeado</Text>
      </View>
    );
  }
}
