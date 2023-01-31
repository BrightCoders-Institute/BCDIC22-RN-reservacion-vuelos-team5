// Node modules
import React, { Component } from 'react';
import { Linking, Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
// Interfaces
import { ISignUpFormCheckboxProps } from '../interfaces/SignUpFormCheckbox';
// Styles
import Styles from '../styles/SignUp';

export default class SignUpFormInputs extends Component<ISignUpFormCheckboxProps> {
  constructor(props: ISignUpFormCheckboxProps) {
    super(props);
  }

  render() {
    if (this.props.type == 'agreed') {
      return (
        <View style={Styles.formCheckbox.main}>
          <Checkbox
            color={Styles.formCheckbox.checkbox.color}
            status={this.props.formikProps.values.inputs.agreed.value ? 'checked' : 'unchecked'}
            onPress={() => {
              this.props.formikProps.setFieldValue(
                'inputs.agreed.value',
                !this.props.formikProps.values.inputs.agreed.value
              );
            }}
          />
          <Text>
            I agree to the{' '}
            <Text
              style={Styles.formCheckbox.textLink}
              onPress={() => {
                Linking.openURL('https://github.com/BrightCoders-Institute');
              }}
            >
              Terms
            </Text>{' '}
            and{' '}
            <Text
              style={Styles.formCheckbox.textLink}
              onPress={() => {
                Linking.openURL('https://github.com/BrightCoders-Institute');
              }}
            >
              Privacy Policy
            </Text>
            .
          </Text>
          <Text style={Styles.formCheckbox.required}>*</Text>
        </View>
      );
    } else if (this.props.type == 'subscribe') {
      return (
        <View style={Styles.formCheckbox.main}>
          <Checkbox
            color={Styles.formCheckbox.checkbox.color}
            status={this.props.formikProps.values.inputs.subscribe.value ? 'checked' : 'unchecked'}
            onPress={() => {
              this.props.formikProps.setFieldValue(
                'inputs.subscribe.value',
                !this.props.formikProps.values.inputs.subscribe.value
              );
            }}
          />
          <Text>Subscribe for select product updates.</Text>
        </View>
      );
    }
  }
}
