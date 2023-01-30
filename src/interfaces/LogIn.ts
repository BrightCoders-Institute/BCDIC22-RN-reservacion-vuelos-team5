// Node modules
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FormikProps } from 'formik';
// Interfaces
import { RootStackParamList } from './RootStackParamList';

export type ILogInProps = NativeStackScreenProps<RootStackParamList, 'LogIn'>;

export interface ILogInState {
  inputs: {
    email: {
      value: string;
      error: boolean;
    };
    password: {
      value: string;
      hidden: boolean;
      error: boolean;
    };
  };
}

export type ILogInFormikProps = FormikProps<ILogInState>;
