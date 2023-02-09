import { ComponentProps } from 'react';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
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
    justifyContent: 'center',
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

export const cards = StyleSheet.create({
  header: {
    borderWidth: 0,
  },
  container: {
    marginTop: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
  },
  table: {
    justifyContent: 'flex-end',
  },
  airplane: {
    position: 'relative',
    alignSelf: 'center',
  },
  textCountry: {
    fontSize: 15,
  },
  textInfo: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  textShort: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: 'black',
    height: 1,
  },
  plane: {
    color: NavigationContainerTheme.colors.primary,
  },
});

export const input = StyleSheet.create({
  style: {
    marginVertical: 10,
    outlineColor: NavigationContainerTheme.colors.primary,
    mode: 'outlined' as ComponentProps<typeof TextInput>['mode'],
  },
  helper: {
    flexDirection: 'row',
  },
  helperIcon: {
    name: 'alert-circle' as keyof typeof MaterialCommunityIcons.glyphMap,
    textAlignVertical: 'center',
    size: 20,
    color: 'red',
  },
  helperText: {
    color: 'red',
    textAlignVertical: 'center',
    flexShrink: 1,
  },
});

export const screen = StyleSheet.create({
  main: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
  container: {
    margin: '5%',
    flex: 1,
  },
  space: {
    marginVertical: 10,
  },
  title: {
    color: NavigationContainerTheme.colors.primary,
    fontSize: 22,
    fontWeight: 'bold',
  },
  header: {
    fontWeight: 'bold',
    marginVertical: 10,
  },
  stepTitleBox: {
    flex: 1,
  },
  content: {
    flex: 0.98,
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
  text: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});

export default {
  button,
  calendar,
  cards,
  input,
  screen,
};
