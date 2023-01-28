import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Constants from 'expo-constants';

export default class BookingCalendar extends Component {
  render() {
    return (
      <View style={{ marginTop: Constants.statusBarHeight }}>
        <Text style={styles.text}>Select date</Text>
        <View style={styles.overlay}>
          <Calendar
            theme={{
              textMonthFontSize: 27,
              textDayFontWeight: '600',
              textMonthFontWeight: 'bold',
              arrowColor: '#5C6EF8',
              textDayFontSize: 18,
              textDayHeaderFontSize: 16,
              todayTextColor: '#FFFFFF',
              todayBackgroundColor: '#5C6EF8',
            }}
            monthSize={60}
            onDayPress={(day) => {
              console.log('selected day', day);
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    margin: '5%',
  },
  overlay: {
    justifyContent: 'center',
  },
});
