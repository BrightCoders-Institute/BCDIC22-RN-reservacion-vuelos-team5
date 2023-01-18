// Node modules
import { FormikProps } from 'formik';

export interface ISignUpFormCheckboxProps {
	formikProps: FormikProps<{
		agreed: boolean;
		email: string;
		name: string;
		password: string;
		passwordHidden: boolean;
		subscribe: boolean;
	}>;
	type: 'agreed' | 'subscribe';
}
