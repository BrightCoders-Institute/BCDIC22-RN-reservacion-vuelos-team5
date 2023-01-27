import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const buttonAdd = StyleSheet.create({
  add: {
    backgroundColor: '#6170f7',
    width: 65,
    height: 65,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  addLocation: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 15,
  },
  addIcon: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

const cards = StyleSheet.create({
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

  Table: {
    justifyContent: 'flex-end',
  },

  airplane: {
    position: 'relative',
    alignSelf: 'center',
    /* right: '50%', */
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
});

const screen = StyleSheet.create({
  text: {
    fontSize: 20,
    top: Constants.statusBarHeight,
    fontWeight: 'bold',
    color: '#6170f7',
    marginTop: 20,
    marginLeft: 20,
  },
  container: {
    height: '100%',
  },
  scroll: {
    marginTop: Constants.statusBarHeight,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default {
  buttonAdd,
  cards,
  screen,
};
