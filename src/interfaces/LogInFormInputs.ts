// Node modules
import { FormikProps } from 'formik';

export interface ILogInFormInputsProps {
  formikProps: FormikProps<{
    email: string;
    password: string;
    passwordHidden: boolean;
  }>;
}
