import React, { Component } from 'react';
import { View } from 'react-native';
import { DataTable, Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import Styles from '../styles/MyFlights';

export default class MyFlightsCardFlight extends Component {
  render() {
    return (
      <View style={Styles.cards.container}>
        <DataTable>
          <DataTable.Header style={Styles.cards.header}>
            <DataTable.Title textStyle={Styles.cards.textShort}>BEG</DataTable.Title>
            <Ionicons name='airplane-sharp' size={30} color={Styles.cards.plane.color} />
            <DataTable.Title textStyle={Styles.cards.textShort} style={Styles.cards.table}>
              AMS
            </DataTable.Title>
          </DataTable.Header>
          <DataTable.Header>
            <DataTable.Cell textStyle={Styles.cards.textCountry}>Serbia</DataTable.Cell>
            <DataTable.Cell textStyle={Styles.cards.textCountry} style={Styles.cards.table}>
              Nerthlands
            </DataTable.Cell>
          </DataTable.Header>
          <DataTable.Header>
            <DataTable.Cell textStyle={Styles.cards.textInfo}>Septiembre 3 2020</DataTable.Cell>
            <DataTable.Cell textStyle={Styles.cards.textInfo} style={Styles.cards.table}>
              2 passengers
            </DataTable.Cell>
          </DataTable.Header>
          <Divider style={Styles.cards.divider} />
        </DataTable>
      </View>
    );
  }
}
