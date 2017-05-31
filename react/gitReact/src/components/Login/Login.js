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

import LoginForm from './LoginForm';
import Principal from './Principal';

const App = StackNavigator({
  Principal: {
    screen: Principal
  },
});

class Login extends React.Component {
  static navigationOptions = {
    title: 'Login'
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>

          <Image style={styles.logo} source={require('../../images/elefante.png')}></Image>

          <Text style={styles.title}>ELEFANTILANDIA</Text>
        </View>
        <View>
        <Button title="Principal" onPress={() => navigate('Principal');}></Button>
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd480' //#ffaa00
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 200
  },
  title: {
    color: 'black',
    marginTop: 0,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  }
});
