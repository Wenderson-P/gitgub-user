import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {WebView} from 'react-native-webview';

export default function Repository({navigation}) {
  const repositoryUrl = navigation.getParam('repositoryUrl');
  return <WebView source={{uri: repositoryUrl}} />;
}
Repository.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

Repository.navigationOptions = ({navigation}) => ({
  title: navigation.getParam('repositoryName'),
});
