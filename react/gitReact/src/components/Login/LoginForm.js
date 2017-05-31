/* @flow */

import React, {Component} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text, StatusBar } from 'react-native';
export default class LoginForm extends React.Component {

  render() {

    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content">
      </StatusBar>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#bfbfbf"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}/>
        <TextInput
        placeholder="Password"
        placeholderTextColor="#bfbfbf"
        returnKeyType="go"
        secureTextEntry
        style={styles.input}
        ref={(input) => this.passwordInput = input}/>

        <TouchableOpacity onPress={() => this.navigate('principal')} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: '#ffeecc',
    marginBottom: 20
  },
  buttonContainer: {
    backgroundColor: '#ff9933',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '700'
  }
});
