// Node modules
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// Interfaces
import { RootStackParamList } from './RootStackParamList';

export type IMyFlightsProps = NativeStackScreenProps<RootStackParamList, 'MyFlights'>;

export interface IMyFlightsState {
  flights: FirebaseFirestoreTypes.DocumentData[];
}
