// Node modules
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Constants from 'expo-constants';
import { Formik } from 'formik';
// Components
import BookingCalendar from '../components/BookingCalendar';

// Interfaces
import { IBookingProps, IBookingState } from '../interfaces/Booking';

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
      <View style={{ height: '100%' }}>
        <ScrollView style={{ marginTop: Constants.statusBarHeight, paddingLeft: 20, paddingRight: 20 }}>
          <Formik
            initialValues={this.state}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {(formikProps) => (
              <View>
                <BookingCalendar formikProps={formikProps} />
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    );
  }
}
