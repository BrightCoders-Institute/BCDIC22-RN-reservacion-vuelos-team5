// Node modules
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Constants from 'expo-constants';

// Components
import CardFlight from '../components/CardFlight';

// Interfaces
import { IMyFlightsProps } from '../interfaces/MyFlights';

import ButtonAdd from '../components/ButtonAdd';

export default class LogIn extends Component<IMyFlightsProps> {
  constructor(props: IMyFlightsProps) {
    super(props);
  }

  render() {
    return (
      <View style={{ height: '100%' }}>
        <ScrollView style={{ marginTop: Constants.statusBarHeight, paddingLeft: 20, paddingRight: 20 }}>
          <CardFlight />
        </ScrollView>
        <ButtonAdd />
      </View>
    );
  }
}
