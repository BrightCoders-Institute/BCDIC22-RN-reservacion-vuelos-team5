// Node modules
import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
// Interfaces
import { IBookingButtonProps } from '../interfaces/BookingButton';
// Styles
import Styles from '../styles/Booking';

export default class BookingButton extends Component<IBookingButtonProps> {
  constructor(props: IBookingButtonProps) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={this.props.disabled ? Styles.button.buttonDisabled : Styles.button.buttonEnabled}
        onPress={this.props.onPress && !this.props.disabled ? this.props.onPress : undefined}
      >
        <Text style={Styles.button.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
