import { StyleSheet } from 'react-native';

export const buttonAdd = StyleSheet.create({
  add: {
    backgroundColor: '#5856D6',
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

export default {
  buttonAdd,
  cards,
};
