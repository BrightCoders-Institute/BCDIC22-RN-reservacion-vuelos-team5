// Node modules
import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Formik } from 'formik';
// Components
import BookingButton from '../components/BookingButton';
import BookingCalendar from '../components/BookingCalendar';
import BookingInput from '../components/BookingInput';

// Interfaces
import { IBookingFormikProps, IBookingProps, IBookingState } from '../interfaces/Booking';
// Styles
import Styles from '../styles/Booking';

export default class Booking extends Component<IBookingProps, IBookingState> {
  constructor(props: IBookingProps) {
    super(props);
    this.state = {
      inputs: {
        origin: {
          value: '',
          error: undefined,
        },
        destination: {
          value: '',
          error: undefined,
        },
        date: {
          value: '',
          error: true,
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

  onNextStep = async (formikProps: IBookingFormikProps) => {
    if (this.state.inputs.steps.value < 5) {
      formikProps.setFieldValue('inputs.steps.value', (formikProps.values.inputs.steps.value += 1));
    } else {
      formikProps.setFieldValue('inputs.steps.value', 1);
      this.props.navigation.navigate('MyFlights');
    }
  };

  isCurrentStepValid = (formikProps: IBookingFormikProps) => {
    if (formikProps.values.inputs.steps.value == 1) {
      if (formikProps.values.inputs.origin.error !== undefined) {
        return !formikProps.values.inputs.origin.error;
      } else {
        return false;
      }
    } else if (formikProps.values.inputs.steps.value == 2) {
      if (formikProps.values.inputs.destination.error !== undefined) {
        return !formikProps.values.inputs.destination.error;
      } else {
        return false;
      }
    } else if (formikProps.values.inputs.steps.value == 3) {
      return !formikProps.values.inputs.date.error;
    } else if (formikProps.values.inputs.steps.value == 4) {
      return !formikProps.values.inputs.passangers.error;
    } else {
      return true;
    }
  };

  render() {
    return (
      <View testID='screenBooking' style={Styles.screen.main}>
        <View style={Styles.screen.container}>
          <Text style={Styles.screen.title}>Booking</Text>
          <Formik
            initialValues={this.state}
            onSubmit={(values, formikHelpers) => {
              formikHelpers.resetForm();
            }}
          >
            {(formikProps) => (
              <View style={Styles.screen.content}>
                <View style={Styles.screen.stepTitleBox}>
                  {this.state.inputs.steps.value == 1 && <Text style={Styles.screen.text}>Where are you now?</Text>}
                  {this.state.inputs.steps.value == 2 && (
                    <Text style={Styles.screen.text}>Where will you be flying to?</Text>
                  )}
                  {this.state.inputs.steps.value == 3 && <Text style={Styles.screen.text}>Select date</Text>}
                  {this.state.inputs.steps.value == 4 && <Text style={Styles.screen.text}>How many passangers?</Text>}
                  {this.state.inputs.steps.value == 5 && (
                    <Text style={Styles.screen.text}>Your request was received</Text>
                  )}
                  <ScrollView>
                    {this.state.inputs.steps.value === 1 && (
                      <BookingInput formikProps={formikProps} type={'origin'} label={'Select location'} />
                    )}
                    {this.state.inputs.steps.value === 2 && (
                      <BookingInput formikProps={formikProps} type={'destination'} label={'Select location'} />
                    )}
                    {this.state.inputs.steps.value === 3 && <BookingCalendar formikProps={formikProps} />}
                    {this.state.inputs.steps.value === 4 && <Text>Step 4</Text>}
                  </ScrollView>
                </View>
                <View>
                  <BookingButton
                    disabled={!this.isCurrentStepValid(formikProps)}
                    text={this.state.inputs.steps.value < 5 ? 'Next' : 'Finish'}
                    onPress={async () => {
                      await this.onNextStep(formikProps);
                    }}
                  />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    );
  }
}
