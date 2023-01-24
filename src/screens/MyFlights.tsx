// Node modules
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

// Components
import CardFlight from '../components/CardFlight';
// Interfaces
import { IMyFlightsProps } from '../interfaces/MyFlights';
// Styles
import Styles from '../styles/LogIn';

export default class LogIn extends Component<IMyFlightsProps> {
  constructor(props: IMyFlightsProps) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={Styles.screen.main}>
        <CardFlight />
      </ScrollView>
    );
  }
}
