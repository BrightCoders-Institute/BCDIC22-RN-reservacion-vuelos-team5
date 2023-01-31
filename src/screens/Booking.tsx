// Node modules
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Formik } from 'formik';
// Components
import BookingCalendar from '../components/BookingCalendar';
// Interfaces
import { IBookingProps, IBookingState } from '../interfaces/Booking';
// Styles
import Styles from '../styles/Booking';

export default class Booking extends Component<IBookingProps, IBookingState> {
  constructor(props: IBookingProps) {
    super(props);
    this.state = {
      inputs: {
        origin: {
          value: '',
          error: false,
        },
        destiny: {
          value: '',
          error: false,
        },
        date: {
          value: '',
          error: false,
        },
        passangers: {
          value: 1,
          error: false,
        },
        steps: {
          value: 1,
          error: false,
        },
      },
    };
  }

  render() {
    return (
      <ScrollView testID='screenBooking' style={Styles.screen.main}>
        <Formik
          initialValues={this.state}
          onSubmit={(values, formikHelpers) => {
            formikHelpers.resetForm();
          }}
        >
          {(formikProps) => (
            <View>
              <BookingCalendar formikProps={formikProps} />
            </View>
          )}
        </Formik>
      </ScrollView>
    );
  }
}
