// Node modules
import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Formik } from 'formik';
// Components
import SignUpFormButton from '../components/SignUpFormButton';
import SignUpFormCheckbox from '../components/SignUpFormCheckbox';
import SignUpFormInputs from '../components/SignUpFormInputs';
// Interfaces
import { ISignUpProps } from '../interfaces/SignUp';
// Styles
import Styles from '../styles/SignUp';

export default class SignUp extends Component<ISignUpProps> {
  constructor(props: ISignUpProps) {
    super(props);
  }

  render() {
    const initialValues = {
      agreed: false,
      email: '',
      name: '',
      password: '',
      passwordHidden: true,
      subscribe: false,
    };
    return (
      <ScrollView style={Styles.screen.main}>
        <View style={Styles.screen.container}>
          <Text style={Styles.screen.title}>Sign Up</Text>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              console.log(values);
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
                  <SignUpFormButton disabled={false} isCommonLogging={true} text={'Sign Up'} />
                  <Text style={Styles.screen.textSeparator}>or</Text>
                  <SignUpFormButton disabled={false} isCommonLogging={false} text={'Sign Up With Google'} />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    );
  }
}
