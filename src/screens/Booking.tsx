// Node modules
import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Formik } from 'formik';
// Components
import BookingButton from '../components/BookingButton';
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

  onNextStep = async () => {
    if (this.state.inputs.steps.value < 4) {
      this.setState({
        inputs: {
          ...this.state.inputs,
          steps: {
            ...this.state.inputs.steps,
            value: (this.state.inputs.steps.value += 1),
          },
        },
      });
    } else {
      this.setState({
        inputs: {
          ...this.state.inputs,
          steps: {
            ...this.state.inputs.steps,
            value: 1,
          },
        },
      });
      this.props.navigation.navigate('MyFlights');
    }
    console.log(this.state.inputs.steps.value);
  };

  render() {
    return (
      <View testID='screenBooking' style={Styles.screen.main}>
        <View style={Styles.screen.container}>
          <Text style={Styles.screen.title}>Booking</Text>
          <ScrollView>
            <Formik
              initialValues={this.state}
              onSubmit={(values, formikHelpers) => {
                formikHelpers.resetForm();
              }}
            >
              {(formikProps) => (
                <View>
                  {this.state.inputs.steps.value === 1 && <Text>Step 1</Text>}
                  {this.state.inputs.steps.value === 2 && <Text>Step 2</Text>}
                  {this.state.inputs.steps.value === 3 && <BookingCalendar formikProps={formikProps} />}
                  {this.state.inputs.steps.value === 4 && <Text>Step 4</Text>}
                  <BookingButton
                    disabled={false}
                    text={this.state.inputs.steps.value < 4 ? 'Next' : 'Finish'}
                    onPress={async () => {
                      await this.onNextStep();
                    }}
                  />
                </View>
              )}
            </Formik>
          </ScrollView>
        </View>
      </View>
    );
  }
}
