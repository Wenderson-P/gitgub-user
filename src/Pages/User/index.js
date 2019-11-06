import React, {Component} from 'react';
import {View} from 'react-native';

export default class User extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('user').name,
  });

  state = {
    stars: [],
  };

  render() {
    return <View />;
  }
}
