// Node modules
import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Formik } from 'formik';
// Components
import LogInFormButton from '../components/LogInFormButton';
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
      <ScrollView testID='screenLogIn' style={Styles.screen.main}>
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
                <View style={Styles.screen.space}>
                  <LogInFormButton disabled={false} isCommonLogging={true} text={'Log In'} />
                  <Text style={Styles.screen.textSeparator}>or</Text>
                  <LogInFormButton disabled={false} isCommonLogging={false} text={'Log In With Google'} />
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
