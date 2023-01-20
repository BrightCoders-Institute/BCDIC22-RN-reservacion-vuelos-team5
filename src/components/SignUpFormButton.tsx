// Node modules
import React, { Component } from 'react';
import { Text } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
// Interfaces
import { ISignUpFormButtonProps } from '../interfaces/SignUpFormButton';
// Styles
import Styles from '../styles/SignUp';

export default class SignUpFormInputs extends Component<ISignUpFormButtonProps> {
  constructor(props: ISignUpFormButtonProps) {
    super(props);
  }

  render() {
    if (this.props.isCommonLogging) {
      return (
        <MaterialIcons.Button
          name='email'
          style={this.props.disabled ? Styles.formButton.buttonDisabled : Styles.formButton.buttonEnabled}
          borderRadius={
            this.props.disabled
              ? Styles.formButton.buttonDisabled.borderRadius
              : Styles.formButton.buttonEnabled.borderRadius
          }
        >
          <Text style={Styles.formButton.text}>{this.props.text}</Text>
        </MaterialIcons.Button>
      );
    } else {
      return (
        <FontAwesome.Button
          name='google'
          style={this.props.disabled ? Styles.formButton.buttonDisabled : Styles.formButton.buttonEnabled}
          borderRadius={
            this.props.disabled
              ? Styles.formButton.buttonDisabled.borderRadius
              : Styles.formButton.buttonEnabled.borderRadius
          }
        >
          <Text style={Styles.formButton.text}>{this.props.text}</Text>
        </FontAwesome.Button>
      );
    }
  }
}
