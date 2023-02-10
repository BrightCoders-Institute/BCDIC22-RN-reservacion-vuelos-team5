// Node modules
import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';
// Components
import MyFlightsCard from '../components/MyFlightsCard';
import MyFlightsButtonAdd from '../components/MyFlightsButtonAdd';
// Firebase
import { auth } from '../firebase/firebaseConfig';
// Interfaces
import { IMyFlightsProps, IMyFlightsState } from '../interfaces/MyFlights';
// Styles
import Styles from '../styles/MyFlights';

export default class LogIn extends Component<IMyFlightsProps, IMyFlightsState> {
  constructor(props: IMyFlightsProps) {
    super(props);
    this.state = {
      flights: [],
    };
  }

  async componentDidMount() {
    await this.getUserFlights();
  }

  getUserFlights = async () => {
    const subscribe = firestore()
      .collection('users')
      .doc(auth().currentUser?.uid)
      .collection('flights')
      .onSnapshot(async (querySnapshot) => {
        const flights = [];
        for (const doc of querySnapshot.docs) {
          flights.push(doc.data());
        }
        this.setState({ flights: flights });
      });
    return () => subscribe();
  };

  render() {
    return (
      <View style={Styles.screen.container}>
        <Text style={Styles.screen.text}>My Flights</Text>
        <FlatList
          style={Styles.screen.scroll}
          data={this.state.flights}
          renderItem={({ item }) => <MyFlightsCard data={item} />}
        />
        <MyFlightsButtonAdd
          onPress={() => {
            this.props.navigation.navigate('Booking');
          }}
        />
      </View>
    );
  }
}
