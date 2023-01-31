// Node modules
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// Interfaces
import { ILogInFormInputsProps } from '../interfaces/LogInFormInputs';
// Styles
import Styles from '../styles/LogIn';

export default class LogInFormInputs extends Component<ILogInFormInputsProps> {
  constructor(props: ILogInFormInputsProps) {
    super(props);
  }

  onEmailChange = async (email: string) => {
    try {
      const validRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      this.props.formikProps.setFieldValue('inputs.email.error', !email.match(validRegex));
    } catch (error) {
      this.props.formikProps.setFieldValue('inputs.email.error', true);
    }
  };

  onPasswordChange = async () => {
    if (this.props.formikProps.values.inputs.password.error) {
      this.props.formikProps.setFieldValue('inputs.password.error', false);
    }
  };

  render() {
    return (
      <View>
        <TextInput
          style={Styles.formInputs.input}
          activeOutlineColor={Styles.formInputs.input.outlineColor}
          label='E-mail'
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
          <View style={Styles.formInputs.helper}>
            <MaterialCommunityIcons
              name={Styles.formInputs.helperIcon.name}
              style={Styles.formInputs.helperIcon}
              size={Styles.formInputs.helperIcon.size}
              color={Styles.formInputs.helperIcon.color}
            />
            <Text style={Styles.formInputs.helperText}>Email address is invalid</Text>
          </View>
        )}
        <TextInput
          style={Styles.formInputs.input}
          activeOutlineColor={Styles.formInputs.input.outlineColor}
          label='Password'
          mode={Styles.formInputs.input.mode}
          onChangeText={async (text) => {
            await this.props.formikProps.handleChange('inputs.password.value')(text);
            await this.onPasswordChange();
          }}
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
        {this.props.formikProps.values.inputs.password.error && (
          <View style={Styles.formInputs.helper}>
            <MaterialCommunityIcons
              name={Styles.formInputs.helperIcon.name}
              style={Styles.formInputs.helperIcon}
              size={Styles.formInputs.helperIcon.size}
              color={Styles.formInputs.helperIcon.color}
            />
            <Text style={Styles.formInputs.helperText}>Password is incorrect</Text>
          </View>
        )}
      </View>
    );
  }
}
