import React, { Component } from 'react';
import { View } from 'react-native';
import { DataTable, Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import Styles from '../styles/MyFlights';

export default class CardFlight extends Component {
  render() {
    return (
      <View>
        <View style={Styles.flights.container}>
          <DataTable>
            <DataTable.Header style={Styles.flights.header}>
              <DataTable.Title textStyle={Styles.flights.textShort}>BEG</DataTable.Title>
              <Ionicons name='airplane-sharp' size={30} color='#6170f7' />
              <DataTable.Title textStyle={Styles.flights.textShort} style={Styles.flights.Table}>
                AMS
              </DataTable.Title>
            </DataTable.Header>
            <DataTable.Header>
              <DataTable.Cell textStyle={Styles.flights.textCountry}>Serbia</DataTable.Cell>
              <DataTable.Cell textStyle={Styles.flights.textCountry} style={Styles.flights.Table}>
                Nerthlands
              </DataTable.Cell>
            </DataTable.Header>
            <DataTable.Header>
              <DataTable.Cell textStyle={Styles.flights.textInfo}>Septiembre 3 2020</DataTable.Cell>
              <DataTable.Cell textStyle={Styles.flights.textInfo} style={Styles.flights.Table}>
                2 passengers
              </DataTable.Cell>
            </DataTable.Header>
            <Divider style={{ backgroundColor: 'black', height: 1 }} />
          </DataTable>
        </View>
      </View>
    );
  }
}
