// Node modules
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';

// Intefaces
import { IBookingCalendarInputsProps } from '../interfaces/BookingCalendar';
export default class BookingCalendar extends Component<IBookingCalendarInputsProps> {
  constructor(props: IBookingCalendarInputsProps) {
    super(props);
  }

  render() {
    return (
      <View style={{ marginTop: Constants.statusBarHeight }}>
        <Text style={styles.text}>Select date</Text>
        <View style={styles.overlay}>
          <Calendar
            minDate={moment().format('YYYY-MM-DD')}
            markedDates={{
              [this.props.formikProps.values.inputs.date.value]: {
                selected: true,
                selectedColor: '#5C6EF8',
              },
            }}
            theme={{
              textMonthFontSize: 27,
              textDayFontWeight: '600',
              textMonthFontWeight: 'bold',
              arrowColor: '#5C6EF8',
              textDayFontSize: 17,
              textDayHeaderFontSize: 16,
              todayTextColor: '#5C6EF8',
            }}
            renderArrow={(direction) => <AntDesign name={direction} size={30} color={'#5C6EF8'} />}
            onDayPress={(day) => {
              this.props.formikProps.setFieldValue('inputs.date.value', day.dateString);
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
