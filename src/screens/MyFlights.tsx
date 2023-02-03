// Node modules
import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';

// Components
import MyFlightsCard from '../components/MyFlightsCard';
import MyFlightsButtonAdd from '../components/MyFlightsButtonAdd';

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
      <View style={Styles.screen.container}>
        <Text style={Styles.screen.text}>My Flights</Text>
        <ScrollView style={Styles.screen.scroll}>
          <MyFlightsCard />
        </ScrollView>
        <MyFlightsButtonAdd
          onPress={() => {
            this.props.navigation.navigate('Booking');
          }}
        />
      </View>
    );
  }
}
