// Node modules
import { FormikProps } from 'formik';

export interface ISignUpFormInputsProps {
	formikProps: FormikProps<{
		name: string;
		email: string;
		password: string;
		hidden: boolean;
	}>;
}
