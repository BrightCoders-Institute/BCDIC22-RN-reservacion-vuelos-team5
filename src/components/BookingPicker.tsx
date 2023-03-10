// Node modules
import React, { Component } from 'react';
import WheelPicker from 'react-native-wheely';
// Interfaces
import { IBookingPickerProps, IBookingPickerState } from '../interfaces/BookingPicker';

export default class BookingPicker extends Component<IBookingPickerProps, IBookingPickerState> {
  constructor(props: IBookingPickerProps) {
    super(props);
    this.state = {
      selected: 0,
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    };
  }

  componentDidMount() {
    this.props.formikProps.setFieldValue('inputs.passengers.value', this.state.options[this.state.selected]);
  }

  render() {
    return (
      <WheelPicker
        selectedIndex={this.state.selected}
        options={this.state.options}
        onChange={(index) => {
          this.setState({ selected: index });
          this.props.formikProps.setFieldValue('inputs.passengers.value', this.state.options[index]);
        }}
      />
    );
  }
}
