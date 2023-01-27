// Node modules
import { FormikProps } from 'formik';

export interface ISignUpFormCheckboxProps {
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
  type: 'agreed' | 'subscribe';
}
