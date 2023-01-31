// Node modules
import React, { Component } from 'react';
import BookingCalendar from './src/components/BookingCalendar';
import Navigation from './src/navigation/Index';
import 'expo-dev-client';

export default class App extends Component {
  constructor(props: object) {
    super(props);
  }

  render() {
    return <BookingCalendar />;
  }
}
