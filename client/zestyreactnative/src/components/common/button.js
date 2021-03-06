import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

/**
 * @param otherStyles, { Object }, allow a parent component to pass in styles
 */
var Button = ({ text, onPress, style }) => {
  return (
    <TouchableHighlight
      style={ [ styles.button, style ] }
      underlayColor={ 'gray' }
      onPress={ onPress }
    >
      <Text style={ styles.buttonText }>{ text }</Text>
    </TouchableHighlight>
  );
};

var styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: 'white',
    marginTop: 10,
    backgroundColor: 'white'
  },
  buttonText: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 20
  }
});

export default Button;
