// Node modules
import React, { Component } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { Formik } from 'formik';
// Components
import LogInFormButton from '../components/LogInFormButton';
import LogInFormInputs from '../components/LogInFormInputs';
// Firebase
import { auth, GoogleSignin } from '../firebase/firebaseConfig';
// Interfaces
import { ILogInFormikProps, ILogInProps, ILogInState } from '../interfaces/LogIn';
// Styles
import Styles from '../styles/LogIn';

export default class LogIn extends Component<ILogInProps, ILogInState> {
  constructor(props: ILogInProps) {
    super(props);
    this.state = {
      inputs: {
        email: {
          value: '',
          error: false,
        },
        password: {
          value: '',
          hidden: true,
          error: false,
        },
      },
    };
  }

  isFormValid = (formikProps: ILogInFormikProps) => {
    return (
      !formikProps.values.inputs.email.error &&
      formikProps.values.inputs.email.value != '' &&
      !formikProps.values.inputs.password.error &&
      formikProps.values.inputs.password.value != ''
    );
  };

  onEmailLogIn = async (formikProps: ILogInFormikProps) => {
    try {
      await auth().signInWithEmailAndPassword(
        formikProps.values.inputs.email.value,
        formikProps.values.inputs.password.value
      );
      this.props.navigation.navigate('MyFlights');
      formikProps.handleSubmit();
    } catch (error) {
      if (error instanceof Error) {
        formikProps.setFieldValue('inputs.password.error', true);
        Alert.alert('Error', error.message);
      } else {
        console.error(error);
      }
    }
  };

  onGoogleLogIn = async (formikProps: ILogInFormikProps) => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const idToken = (await GoogleSignin.signIn()).idToken;
      const credential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(credential);
      this.props.navigation.navigate('MyFlights');
      formikProps.handleSubmit();
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Error', error.message);
      } else {
        console.error(error);
      }
    }
  };

  render() {
    return (
      <ScrollView testID='screenLogIn' style={Styles.screen.main}>
        <View style={Styles.screen.container}>
          <Text style={Styles.screen.title}>Log In</Text>
          <Formik
            initialValues={this.state}
            onSubmit={(values, formikHelpers) => {
              formikHelpers.resetForm();
            }}
          >
            {(formikProps) => (
              <View>
                <View style={Styles.screen.space}>
                  <LogInFormInputs formikProps={formikProps} />
                </View>
                <View style={Styles.screen.space}>
                  <LogInFormButton
                    disabled={!this.isFormValid(formikProps)}
                    isCommonLogging={true}
                    text={'Log In'}
                    onPress={async () => await this.onEmailLogIn(formikProps)}
                  />
                  <Text style={Styles.screen.textSeparator}>or</Text>
                  <LogInFormButton
                    disabled={false}
                    isCommonLogging={false}
                    text={'Log In With Google'}
                    onPress={async () => await this.onGoogleLogIn(formikProps)}
                  />
                </View>
              </View>
            )}
          </Formik>
          <Text style={Styles.screen.textCentered}>
            Don't have an account?{' '}
            <Text
              testID='linkSignUp'
              style={[Styles.screen.textLink, Styles.screen.textLinkColor]}
              onPress={() => {
                this.props.navigation.navigate('SignUp');
              }}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </ScrollView>
    );
  }
}
