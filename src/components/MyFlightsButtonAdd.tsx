import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Styles from '../styles/MyFlights';
import { IMyFlightsButtonAddProps } from '../interfaces/MyFlightsButtonAdd';

export default class MyFlightsButtonAdd extends Component<IMyFlightsButtonAddProps> {
  constructor(props: IMyFlightsButtonAddProps) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={Styles.buttonAdd.addLocation}>
        <View style={Styles.buttonAdd.add}>
          <Ionicons
            name='add'
            style={Styles.buttonAdd.addIcon}
            onPress={this.props.onPress ? this.props.onPress : undefined}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
