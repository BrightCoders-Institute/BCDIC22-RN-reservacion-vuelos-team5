// Node modules
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// Interfaces
import { IBookingInputProps } from '../interfaces/BookingInput';
// Styles
import Styles from '../styles/Booking';

export default class BookingInput extends Component<IBookingInputProps> {
  constructor(props: IBookingInputProps) {
    super(props);
  }

  onInputChange = async (value: string) => {
    await this.props.formikProps.handleChange(`inputs.${this.props.type}.value`)(value);
    if (this.props.formikProps.values.inputs[this.props.type].value == '') {
      await this.props.formikProps.setFieldValue(`inputs.${this.props.type}.error`, true);
    } else {
      await this.props.formikProps.setFieldValue(`inputs.${this.props.type}.error`, false);
    }
  };

  render() {
    return (
      <View>
        <TextInput
          style={Styles.input.style}
          activeOutlineColor={Styles.input.style.outlineColor}
          label={this.props.label}
          mode={Styles.input.style.mode}
          onChangeText={async (text) => {
            this.onInputChange(text);
          }}
          error={this.props.formikProps.values.inputs[this.props.type].error}
          value={this.props.formikProps.values.inputs[this.props.type].value}
          keyboardType='default'
        />
        {this.props.formikProps.values.inputs[this.props.type].error && (
          <View style={Styles.input.helper}>
            <MaterialCommunityIcons
              name={Styles.input.helperIcon.name}
              style={Styles.input.helperIcon}
              size={Styles.input.helperIcon.size}
              color={Styles.input.helperIcon.color}
            />
            <Text style={Styles.input.helperText}>Location is invalid</Text>
          </View>
        )}
      </View>
    );
  }
}
