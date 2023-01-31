import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import moment from 'moment';
// Constants
import { NavigationContainerTheme } from '../constants/themes';

import { CalendarProps } from 'react-native-calendars';

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

const screen = StyleSheet.create({
  main: {
    marginTop: Constants.statusBarHeight,
  },
});

export default {
  calendar,
  screen,
};
