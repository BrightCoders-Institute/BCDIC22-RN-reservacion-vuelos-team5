// Node modules
import React, { Component } from 'react';
import { Calendar } from 'react-native-calendars';
import { AntDesign } from '@expo/vector-icons';
// Styles
import Styles from '../styles/Booking';

// Intefaces
import { IBookingCalendarInputsProps } from '../interfaces/BookingCalendar';
export default class BookingCalendar extends Component<IBookingCalendarInputsProps> {
  constructor(props: IBookingCalendarInputsProps) {
    super(props);
  }

  render() {
    return (
      <Calendar
        style={Styles.calendar.style.container}
        minDate={Styles.calendar.minDate}
        markedDates={{
          [this.props.formikProps.values.inputs.date.value]: {
            selected: Styles.calendar.markedDates.selected,
            selectedColor: Styles.calendar.markedDates.selectedColor,
          },
        }}
        theme={Styles.calendar.theme}
        renderArrow={(direction) => (
          <AntDesign
            name={direction}
            size={Styles.calendar.renderArrow.icon.size}
            color={Styles.calendar.renderArrow.icon.color}
          />
        )}
        onDayPress={(day) => {
          this.props.formikProps.setFieldValue('inputs.date.value', day.dateString);
          this.props.formikProps.setFieldValue('inputs.date.error', false);
        }}
      />
    );
  }
}
