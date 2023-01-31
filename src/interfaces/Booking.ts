// Node modules
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FormikProps } from 'formik';
// Interfaces
import { RootStackParamList } from './RootStackParamList';

export type IBookingProps = NativeStackScreenProps<RootStackParamList, 'Booking'>;

export interface IBookingState {
  inputs: {
    origin: {
      value: string;
      error: boolean;
    };
    destiny: {
      value: string;
      error: boolean;
    };
    date: {
      value: string;
      error: boolean;
    };
    passangers: {
      value: string | number;
      error: boolean;
    };
    steps: {
      value: number;
      error: boolean;
    };
  };
}

export type IBookingFormikProps = FormikProps<IBookingState>;
