// Node modules
import { FormikProps } from 'formik';

export interface ISignUpFormInputsProps {
  formikProps: FormikProps<{
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
  }>;
}

export interface ISignUpFormInputsState {
  inputsErrors: {
    name: boolean;
    email: boolean;
    password: boolean;
  };
}
