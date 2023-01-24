import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DataTable, Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

export default class CardFlight extends Component {
  render() {
    return (
      <View style={{ margin: 10 }}>
        <View style={styles.container}>
          <Text style={styles.text}>BEG</Text>
          <Ionicons name='airplane-sharp' size={30} color='#6170f7' />
          <Text style={styles.text}>Serbia</Text>
        </View>

        <View>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title textStyle={{ fontSize: 15 }}>Serbia</DataTable.Title>
              <DataTable.Title textStyle={{ fontSize: 15 }} style={styles.Table}>
                Nerthlands
              </DataTable.Title>
            </DataTable.Header>
            <Divider />
            <DataTable.Header>
              <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 15 }}>Septiembre 3 2020</DataTable.Cell>
              <DataTable.Cell textStyle={{ fontWeight: 'bold', fontSize: 15 }} style={styles.Table}>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 390,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Constants.statusBarHeight,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
  },

  Table: {
    justifyContent: 'flex-end',
  },
});
