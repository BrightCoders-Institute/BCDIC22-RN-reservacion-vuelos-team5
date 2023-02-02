import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import moment from 'moment';
// Constants
import { NavigationContainerTheme } from '../constants/themes';

import { CalendarProps } from 'react-native-calendars';

export const button = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonEnabled: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: NavigationContainerTheme.colors.primary,
  },
  buttonDisabled: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#B6B7BA',
  },
});

export const calendar = {
  style: StyleSheet.create({
    container: {
      fontSize: 35,
      fontWeight: 'bold',
      margin: '5%',
      justifyContent: 'center',
    },
  }),
  minDate: moment().format('YYYY-MM-DD'),
  markedDates: {
    selected: true,
    selectedColor: NavigationContainerTheme.colors.primary,
  },
  theme: {
    textMonthFontSize: 27,
    textDayFontWeight: '600',
    textMonthFontWeight: 'bold',
    arrowColor: '#5C6EF8',
    textDayFontSize: 17,
    textDayHeaderFontSize: 16,
    todayTextColor: '#5C6EF8',
  } as CalendarProps['theme'],
  renderArrow: {
    icon: {
      size: 30,
      color: NavigationContainerTheme.colors.primary,
    },
  },
};

export const screen = StyleSheet.create({
  main: {
    marginTop: Constants.statusBarHeight,
  },
  container: {
    margin: '5%',
  },
  space: {
    marginVertical: 10,
  },
  title: {
    color: NavigationContainerTheme.colors.primary,
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  textCentered: {
    textAlign: 'center',
  },
  textLink: {
    textDecorationLine: 'underline',
  },
  textLinkColor: {
    color: NavigationContainerTheme.colors.primary,
  },
  textSeparator: {
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default {
  button,
  calendar,
  screen,
};
