// Node modules
import React, { Component } from 'react';
import Navigation from './src/navigation/Index';
import 'expo-dev-client';

export default class App extends Component {
  constructor(props: object) {
    super(props);
  }

  render() {
    return <Navigation />;
  }
}
