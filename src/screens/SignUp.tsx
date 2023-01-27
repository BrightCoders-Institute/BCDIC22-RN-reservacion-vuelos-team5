// Node modules
import React, { Component } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth/react-native';
import { Formik } from 'formik';
// Components
import SignUpFormButton from '../components/SignUpFormButton';
import SignUpFormCheckbox from '../components/SignUpFormCheckbox';
import SignUpFormInputs from '../components/SignUpFormInputs';
// Firebase
import { auth } from '../firebase/firebaseConfig';
// Interfaces
import { ISignUpProps, ISignUpState, ISignUpFormikProps } from '../interfaces/SignUp';
// Styles
import Styles from '../styles/SignUp';

export default class SignUp extends Component<ISignUpProps, ISignUpState> {
  constructor(props: ISignUpProps) {
    super(props);
    this.state = {
      inputs: {
        agreed: {
          value: false,
        },
        email: {
          value: '',
          error: false,
        },
        name: {
          value: '',
          error: false,
        },
        password: {
          value: '',
          hidden: true,
          error: false,
        },
        subscribe: {
          value: false,
        },
      },
    };
  }

  isFormValid = (formikProps: ISignUpFormikProps) => {
    return (
      !formikProps.values.inputs.email.error &&
      formikProps.values.inputs.email.value != '' &&
      !formikProps.values.inputs.password.error &&
      formikProps.values.inputs.password.value != '' &&
      formikProps.values.inputs.agreed.value
    );
  };

  render() {
    return (
      <ScrollView testID='screenSignUp' style={Styles.screen.main}>
        <View style={Styles.screen.container}>
          <Text style={Styles.screen.title}>Sign Up</Text>
          <Formik
            initialValues={this.state}
            onSubmit={(values) => {
              createUserWithEmailAndPassword(auth, values.inputs.email.value, values.inputs.password.value)
                .then(async (userCredential) => {
                  await updateProfile(userCredential.user, {
                    displayName: values.inputs.name.value,
                  });
                  this.props.navigation.navigate('MyFlights');
                })
                .catch((error) => {
                  Alert.alert('Error', error.message);
                });
            }}
          >
            {(formikProps) => (
              <View>
                <View style={Styles.screen.space}>
                  <SignUpFormInputs formikProps={formikProps} />
                </View>
                <View style={Styles.screen.space}>
                  <SignUpFormCheckbox formikProps={formikProps} type={'agreed'} />
                  <SignUpFormCheckbox formikProps={formikProps} type={'subscribe'} />
                </View>
                <View style={Styles.screen.space}>
                  <SignUpFormButton
                    disabled={!this.isFormValid(formikProps)}
                    isCommonLogging={true}
                    text={'Sign Up'}
                    onPress={() => {
                      formikProps.handleSubmit();
                    }}
                  />
                  <Text style={Styles.screen.textSeparator}>or</Text>
                  <SignUpFormButton disabled={false} isCommonLogging={false} text={'Sign Up With Google'} />
                </View>
                <Text style={Styles.screen.textCentered}>
                  Already have an account?{' '}
                  <Text
                    testID='linkLogIn'
                    style={[Styles.screen.textLink, Styles.screen.textLinkColor]}
                    onPress={() => {
                      this.props.navigation.navigate('LogIn');
                    }}
                  >
                    Log In
                  </Text>
                </Text>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    );
  }
}
