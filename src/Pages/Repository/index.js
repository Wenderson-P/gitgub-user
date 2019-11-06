import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

export default function Repository({navigation}) {
  const repositoryUrl = navigation.getParam('repositoryUrl');
  return <WebView source={{uri: repositoryUrl}} />;
}
