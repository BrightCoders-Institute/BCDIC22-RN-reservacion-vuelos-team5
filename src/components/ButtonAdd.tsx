import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Styles from '../styles/MyFlights';

export default class ButtonAdd extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={Styles.ButtonAdd.addLocation}>
          <View style={Styles.ButtonAdd.add}>
            <Ionicons style={Styles.ButtonAdd.addIcon} name='add' size={30} color='#FFFFFF' />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
