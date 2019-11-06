import React, {Component} from 'react';
import Proptypes from 'prop-types';
import {View} from 'react-native';
import api from '../../services/api';

export default class User extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('user').name,
  });

  state = {
    stars: [],
  };

  async componentDidMount() {
    const {navigation} = this.props;
    const user = navigation.getParams('user');

    const response = await api.get(`users/${user.login}/starred`);

    this.state({stars: response.data});
  }

  render() {
    return <View />;
  }
}

User.propTypes = {
  navigation: Proptypes.shape({
    getParam: Proptypes.func,
  }).isRequired,
};
