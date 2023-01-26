import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Styles from '../styles/MyFlights';

export default class MyFlightsButtonAdd extends Component {
  render() {
    return (
      <TouchableOpacity style={Styles.buttonAdd.addLocation}>
        <View style={Styles.buttonAdd.add}>
          <Ionicons style={Styles.buttonAdd.addIcon} name='add' size={30} color='#FFFFFF' />
        </View>
      </TouchableOpacity>
    );
  }
}
