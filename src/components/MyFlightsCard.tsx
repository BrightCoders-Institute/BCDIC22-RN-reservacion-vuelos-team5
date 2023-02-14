// Node modules
import React, { Component } from 'react';
import { View } from 'react-native';
import { DataTable, Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
// Interfaces
import { IMyFlightsCardFlightProps } from '../interfaces/MyFlightsCardFlight';
// Styles
import Styles from '../styles/MyFlights';

export default class MyFlightsCardFlight extends Component<IMyFlightsCardFlightProps> {
  constructor(props: IMyFlightsCardFlightProps) {
    super(props);
  }
  render() {
    return (
      <View style={Styles.cards.container}>
        <DataTable>
          <DataTable.Header style={Styles.cards.header}>
            <DataTable.Title textStyle={Styles.cards.textShort}>
              {this.props.data.origin.substring(
                this.props.data.origin.indexOf(', ') + 2,
                this.props.data.origin.length
              )}
            </DataTable.Title>
            <Ionicons name='airplane-sharp' size={30} color={Styles.cards.plane.color} />
            <DataTable.Title textStyle={Styles.cards.textShort} style={Styles.cards.table}>
              {this.props.data.destination.substring(
                this.props.data.destination.indexOf(', ') + 2,
                this.props.data.destination.length
              )}
            </DataTable.Title>
          </DataTable.Header>
          <DataTable.Header>
            <DataTable.Cell textStyle={Styles.cards.textCountry}>
              {this.props.data.origin.substring(0, this.props.data.origin.indexOf(', '))}
            </DataTable.Cell>
            <DataTable.Cell textStyle={Styles.cards.textCountry} style={Styles.cards.table}>
              {this.props.data.destination.substring(0, this.props.data.destination.indexOf(', '))}
            </DataTable.Cell>
          </DataTable.Header>
          <DataTable.Header>
            <DataTable.Cell textStyle={Styles.cards.textInfo}>
              {moment(this.props.data.date).format('LL')}
            </DataTable.Cell>
            <DataTable.Cell textStyle={Styles.cards.textInfo} style={Styles.cards.table}>
              {this.props.data.passengers} passengers
            </DataTable.Cell>
          </DataTable.Header>
          <Divider style={Styles.cards.divider} />
        </DataTable>
      </View>
    );
  }
}
