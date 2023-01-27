// Node modules
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FormikProps } from 'formik';
// Interfaces
import { RootStackParamList } from './RootStackParamList';

export type ISignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export interface ISignUpState {
  inputs: {
    agreed: {
      value: boolean;
    };
    email: {
      value: string;
      error: boolean;
    };
    name: {
      value: string;
      error: boolean;
    };
    password: {
      value: string;
      hidden: boolean;
      error: boolean;
    };
    subscribe: {
      value: boolean;
    };
  };
}

export type ISignUpFormikProps = FormikProps<ISignUpState>;
