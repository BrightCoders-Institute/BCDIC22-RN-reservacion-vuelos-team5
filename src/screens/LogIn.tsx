// Node modules
import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Formik } from 'formik';
// Components
import LogInFormInputs from '../components/LogInFormInputs';
// Interfaces
import { ILogInProps } from '../interfaces/LogIn';
// Styles
import Styles from '../styles/LogIn';

export default class LogIn extends Component<ILogInProps> {
  constructor(props: ILogInProps) {
    super(props);
  }

  render() {
    const initialValues = {
      email: '',
      password: '',
      passwordHidden: true,
    };
    return (
      <ScrollView style={Styles.screen.main}>
        <View style={Styles.screen.container}>
          <Text style={Styles.screen.title}>Log In</Text>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {(formikProps) => (
              <View>
                <View style={Styles.screen.space}>
                  <LogInFormInputs formikProps={formikProps} />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    );
  }
}
