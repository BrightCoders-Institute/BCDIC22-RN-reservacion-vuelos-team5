// Node modules
import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Formik } from 'formik';
import { AntDesign } from '@expo/vector-icons';
import firestore from '@react-native-firebase/firestore';
// Components
import BookingButton from '../components/BookingButton';
import BookingCalendar from '../components/BookingCalendar';
import BookingCard from '../components/BookingCard';
import BookingInput from '../components/BookingInput';
import BookingPicker from '../components/BookingPicker';
// Interfaces
import { IBookingFormikProps, IBookingProps, IBookingState } from '../interfaces/Booking';
// Firebase
import { auth } from '../firebase/firebaseConfig';
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
        passengers: {
          value: undefined,
          error: false,
        },
        steps: {
          value: 1,
          error: false,
        },
      },
    };
  }

  saveFlight = async (formikProps: IBookingFormikProps) => {
    firestore().collection('users').doc(auth().currentUser?.uid).collection('flights').add({
      origin: formikProps.values.inputs.origin.value,
      destination: formikProps.values.inputs.destination.value,
      date: formikProps.values.inputs.date.value,
      passengers: formikProps.values.inputs.passengers.value,
    });
  };

  onNextStep = async (formikProps: IBookingFormikProps) => {
    if (this.state.inputs.steps.value < 5) {
      formikProps.setFieldValue('inputs.steps.value', (formikProps.values.inputs.steps.value += 1));
    } else {
      await this.saveFlight(formikProps);
      formikProps.setFieldValue('inputs.steps.value', 1);
      this.props.navigation.navigate('MyFlights');
    }
  };

  onPreviousStep = async (formikProps: IBookingFormikProps) => {
    if (this.state.inputs.steps.value > 1) {
      formikProps.setFieldValue('inputs.steps.value', (formikProps.values.inputs.steps.value -= 1));
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
      return !formikProps.values.inputs.passengers.error;
    } else {
      return true;
    }
  };

  render() {
    return (
      <View testID='screenBooking' style={Styles.screen.style.main}>
        <Formik
          initialValues={this.state}
          onSubmit={(values, formikHelpers) => {
            formikHelpers.resetForm();
          }}
        >
          {(formikProps) => (
            <View style={Styles.screen.style.container}>
              <View style={Styles.screen.style.header}>
                <View style={{ flexDirection: 'row' }}>
                  <AntDesign
                    name={'left'}
                    size={Styles.screen.goBackArrow.icon.size}
                    color={Styles.screen.goBackArrow.icon.color}
                    style={Styles.screen.goBackArrow.style.text}
                    onPress={async () => {
                      this.onPreviousStep(formikProps);
                    }}
                  />
                  <Text style={Styles.screen.style.title}>Booking</Text>
                </View>
                <BookingCard formikProps={formikProps} />
              </View>
              <View style={Styles.screen.style.content}>
                <View style={Styles.screen.style.stepTitleBox}>
                  {this.state.inputs.steps.value == 1 && (
                    <Text style={Styles.screen.style.text}>Where are you now?</Text>
                  )}
                  {this.state.inputs.steps.value == 2 && (
                    <Text style={Styles.screen.style.text}>Where will you be flying to?</Text>
                  )}
                  {this.state.inputs.steps.value == 3 && <Text style={Styles.screen.style.text}>Select date</Text>}
                  {this.state.inputs.steps.value == 4 && (
                    <Text style={Styles.screen.style.text}>How many passangers?</Text>
                  )}
                  {this.state.inputs.steps.value == 5 && (
                    <Text style={Styles.screen.style.text}>Your request was received</Text>
                  )}
                  <ScrollView>
                    {this.state.inputs.steps.value === 1 && (
                      <BookingInput formikProps={formikProps} type={'origin'} label={'Select location'} />
                    )}
                    {this.state.inputs.steps.value === 2 && (
                      <BookingInput formikProps={formikProps} type={'destination'} label={'Select location'} />
                    )}
                    {this.state.inputs.steps.value === 3 && <BookingCalendar formikProps={formikProps} />}
                    {this.state.inputs.steps.value === 4 && <BookingPicker formikProps={formikProps} />}
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
            </View>
          )}
        </Formik>
      </View>
    );
  }
}
