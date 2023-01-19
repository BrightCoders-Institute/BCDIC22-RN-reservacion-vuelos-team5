// Node modules
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
// Constants
import { NavigationContainerTheme } from '../constants/themes';

export const formButton = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonEnabled: {
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#5C6EF8',
  },
  buttonDisabled: {
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#B6B7BA',
  },
});
export const formCheckbox = StyleSheet.create({
  checkbox: {
    color: NavigationContainerTheme.colors.primary,
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLink: {
    textDecorationLine: 'underline',
  },
  required: {
    color: 'red',
  },
});
export const formInputs = StyleSheet.create({
  input: {
    marginVertical: 10,
    outlineColor: NavigationContainerTheme.colors.primary,
    mode: 'outlined' as 'outlined' | 'flat' | undefined,
  },
});
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
  textSeparator: {
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default {
  formButton,
  formCheckbox,
  formInputs,
  screen,
};
