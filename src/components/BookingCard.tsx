// Node modules
import React, { Component } from 'react';
import moment from 'moment';
import { View } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
// Interfaces
import { IBookingCardFlightProps } from '../interfaces/BookingCard';
// Styles
import Styles from '../styles/MyFlights';

export default class MyFlightsCardFlight extends Component<IBookingCardFlightProps> {
  render() {
    return (
      <View style={Styles.cards.container}>
        <DataTable>
          <DataTable.Header style={Styles.cards.header}>
            <DataTable.Title textStyle={Styles.cards.textShort}>
              {this.props.formikProps.values.inputs.steps.value > 1 &&
                this.props.formikProps.values.inputs.origin.value.substring(
                  this.props.formikProps.values.inputs.origin.value.indexOf(', ') + 2,
                  this.props.formikProps.values.inputs.origin.value.length
                )}
            </DataTable.Title>
            <Ionicons name='airplane-sharp' size={30} color={Styles.cards.plane.color} />
            <DataTable.Title textStyle={Styles.cards.textShort} style={Styles.cards.table}>
              {this.props.formikProps.values.inputs.steps.value > 2 &&
                this.props.formikProps.values.inputs.destination.value.substring(
                  this.props.formikProps.values.inputs.destination.value.indexOf(', ') + 2,
                  this.props.formikProps.values.inputs.destination.value.length
                )}
            </DataTable.Title>
          </DataTable.Header>
          <DataTable.Header>
            <DataTable.Cell textStyle={Styles.cards.textCountry}>
              {this.props.formikProps.values.inputs.steps.value > 1 &&
                this.props.formikProps.values.inputs.origin.value.substring(
                  0,
                  this.props.formikProps.values.inputs.origin.value.indexOf(', ')
                )}
            </DataTable.Cell>
            <DataTable.Cell textStyle={Styles.cards.textCountry} style={Styles.cards.table}>
              {this.props.formikProps.values.inputs.steps.value > 2 &&
                this.props.formikProps.values.inputs.destination.value.substring(
                  0,
                  this.props.formikProps.values.inputs.destination.value.indexOf(', ')
                )}
            </DataTable.Cell>
          </DataTable.Header>
          <DataTable.Header>
            <DataTable.Cell textStyle={Styles.cards.textInfo}>
              {this.props.formikProps.values.inputs.steps.value > 3 &&
                moment(this.props.formikProps.values.inputs.date.value).format('LL')}
            </DataTable.Cell>
            <DataTable.Cell textStyle={Styles.cards.textInfo} style={Styles.cards.table}>
              {this.props.formikProps.values.inputs.passengers.value &&
                this.props.formikProps.values.inputs.steps.value > 4 &&
                `${this.props.formikProps.values.inputs.passengers.value} passengers`}
            </DataTable.Cell>
          </DataTable.Header>
        </DataTable>
      </View>
    );
  }
}
