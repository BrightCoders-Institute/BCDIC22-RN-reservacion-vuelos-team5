// Node modules
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
// Interfaces
import { ISignUpFormInputsProps } from '../interfaces/SignUpFormInputs';
// Styles
import Styles from '../styles/SignUp';

export default class SignUpFormInputs extends Component<ISignUpFormInputsProps> {
  constructor(props: ISignUpFormInputsProps) {
    super(props);
  }

  render() {
    return (
      <View>
        <TextInput
          style={Styles.formInputs.input}
          activeOutlineColor={Styles.formInputs.input.outlineColor}
          label='Name'
          mode={Styles.formInputs.input.mode}
          onChangeText={this.props.formikProps.handleChange('name')}
          value={this.props.formikProps.values.name}
          keyboardType='default'
        />
        <TextInput
          style={Styles.formInputs.input}
          activeOutlineColor={Styles.formInputs.input.outlineColor}
          label='E-mail *'
          mode={Styles.formInputs.input.mode}
          onChangeText={this.props.formikProps.handleChange('email')}
          value={this.props.formikProps.values.email}
          keyboardType='email-address'
        />
        <TextInput
          style={Styles.formInputs.input}
          activeOutlineColor={Styles.formInputs.input.outlineColor}
          label='Password *'
          mode={Styles.formInputs.input.mode}
          onChangeText={this.props.formikProps.handleChange('password')}
          value={this.props.formikProps.values.password}
          secureTextEntry={this.props.formikProps.values.passwordHidden}
          right={
            <TextInput.Icon
              icon={this.props.formikProps.values.passwordHidden ? 'eye' : 'eye-off'}
              onPress={() => {
                this.props.formikProps.setFieldValue('passwordHidden', !this.props.formikProps.values.passwordHidden);
                return !this.props.formikProps.values.passwordHidden;
              }}
            />
          }
        />
        <Text>Use 8 or more characters with a mix of letters, numbers, and symbols</Text>
      </View>
    );
  }
}
