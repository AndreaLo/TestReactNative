/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Andre App</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>by Andrea López Gañan</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: '#ffd480', //o bien 'red'
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      color: 'white',
      fontSize: 35,
      fontWeight: 'bold'
    },
    subtitle: {
      color: 'white',
      fontWeight: '200',
      paddingBottom: 20 //o bien en porcentaje de las siguiente forma -> '10%'
    },
    titleWrapper: {
      justifyContent: 'center',
      flex: 1
    }
});
