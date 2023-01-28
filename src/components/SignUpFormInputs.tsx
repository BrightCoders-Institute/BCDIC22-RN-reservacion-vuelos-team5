// Node modules
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// Firebase
import { auth } from '../firebase/firebaseConfig';
// Interfaces
import { ISignUpFormInputsProps } from '../interfaces/SignUpFormInputs';
// Styles
import Styles from '../styles/SignUp';

export default class SignUpFormInputs extends Component<ISignUpFormInputsProps> {
  constructor(props: ISignUpFormInputsProps) {
    super(props);
  }
  onEmailChange = async (email: string) => {
    try {
      const signInMethods = await auth().fetchSignInMethodsForEmail(email);
      const validRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      this.props.formikProps.setFieldValue('inputs.email.error', signInMethods.length > 0 || !email.match(validRegex));
    } catch (error) {
      this.props.formikProps.setFieldValue('inputs.email.error', true);
    }
  };

  onPasswordChange = (password: string) => {
    const validRegex =
      /^.*(?=.{8,120})(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#/$%^&*()-_=+[\]\\{}:;"',<.>?]).*$/;
    this.props.formikProps.setFieldValue('inputs.password.error', !password.match(validRegex));
  };

  render() {
    return (
      <View>
        <TextInput
          style={Styles.formInputs.input}
          activeOutlineColor={Styles.formInputs.input.outlineColor}
          label='Name'
          mode={Styles.formInputs.input.mode}
          onChangeText={(text) => {
            this.props.formikProps.handleChange('inputs.name.value')(text);
          }}
          error={this.props.formikProps.values.inputs.name.error}
          value={this.props.formikProps.values.inputs.name.value}
          keyboardType='default'
        />
        <TextInput
          style={Styles.formInputs.input}
          activeOutlineColor={Styles.formInputs.input.outlineColor}
          label='E-mail *'
          mode={Styles.formInputs.input.mode}
          onChangeText={async (text) => {
            await this.props.formikProps.handleChange('inputs.email.value')(text);
            await this.onEmailChange(this.props.formikProps.values.inputs.email.value);
          }}
          error={this.props.formikProps.values.inputs.email.error}
          value={this.props.formikProps.values.inputs.email.value}
          keyboardType='email-address'
        />
        {this.props.formikProps.values.inputs.email.error && (
          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons name='alert-circle' size={20} color='red' style={{ textAlignVertical: 'center' }} />
            <Text
              style={{
                color: 'red',
                textAlignVertical: 'center',
                flexShrink: 1,
              }}
            >
              Email address is invalid or already used
            </Text>
          </View>
        )}
        <TextInput
          style={Styles.formInputs.input}
          activeOutlineColor={Styles.formInputs.input.outlineColor}
          label='Password *'
          mode={Styles.formInputs.input.mode}
          onChangeText={async (text) => {
            await this.props.formikProps.handleChange('inputs.password.value')(text);
            await this.onPasswordChange(this.props.formikProps.values.inputs.password.value);
          }}
          error={this.props.formikProps.values.inputs.password.error}
          value={this.props.formikProps.values.inputs.password.value}
          secureTextEntry={this.props.formikProps.values.inputs.password.hidden}
          right={
            <TextInput.Icon
              icon={this.props.formikProps.values.inputs.password.hidden ? 'eye' : 'eye-off'}
              onPress={() => {
                this.props.formikProps.setFieldValue(
                  'inputs.password.hidden',
                  !this.props.formikProps.values.inputs.password.hidden
                );
                return !this.props.formikProps.values.inputs.password.hidden;
              }}
            />
          }
        />
        <View style={{ flexDirection: 'row' }}>
          {this.props.formikProps.values.inputs.password.error && (
            <MaterialCommunityIcons name='alert-circle' size={20} color='red' style={{ textAlignVertical: 'center' }} />
          )}
          <Text
            style={{
              color: this.props.formikProps.values.inputs.password.error ? 'red' : undefined,
              textAlignVertical: 'center',
              flexShrink: 1,
            }}
          >
            Use 8 or more characters with a mix of letters, numbers, and symbols
          </Text>
        </View>
      </View>
    );
  }
}
