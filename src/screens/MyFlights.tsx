// Node modules
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Constants from 'expo-constants';

// Components
import MyFlightsCard from '../components/MyFlightsCard';
import MyFlightsButtonAdd from '../components/MyFlightsButtonAdd';

// Interfaces
import { IMyFlightsProps } from '../interfaces/MyFlights';

export default class LogIn extends Component<IMyFlightsProps> {
  constructor(props: IMyFlightsProps) {
    super(props);
  }

  render() {
    return (
      <View style={{ height: '100%' }}>
        <ScrollView style={{ marginTop: Constants.statusBarHeight, paddingLeft: 20, paddingRight: 20 }}>
          <MyFlightsCard />
        </ScrollView>
        <MyFlightsButtonAdd />
      </View>
    );
  }
}
