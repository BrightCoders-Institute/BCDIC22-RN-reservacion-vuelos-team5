import { StyleSheet } from 'react-native';

export const flights = StyleSheet.create({
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
    position: 'relative',
    bottom: 15,
    alignItems: 'center',
  },
  addIcon: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default {
  flights,
};
