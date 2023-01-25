// Node modules
import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants';

// Components
import CardFlight from '../components/CardFlight';
import { Ionicons } from '@expo/vector-icons';
// Interfaces
import { IMyFlightsProps } from '../interfaces/MyFlights';
// Styles
import Styles from '../styles/MyFlights';

export default class LogIn extends Component<IMyFlightsProps> {
  constructor(props: IMyFlightsProps) {
    super(props);
  }

  render() {
    return (
      <View style={{ height: '100%' }}>
        <ScrollView style={{ marginTop: Constants.statusBarHeight, paddingLeft: 20, paddingRight: 20 }}>
          <CardFlight />
          <CardFlight />
          <CardFlight />
          <CardFlight />
          <CardFlight />
          <CardFlight />
        </ScrollView>
        <TouchableOpacity style={Styles.flights.addLocation}>
          <View style={Styles.flights.add}>
            <Ionicons style={Styles.flights.addIcon} name='add' size={30} color='#FFFFFF' />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
