export interface ISignUpFormInputsProps {
	formikprops: {
		handleChange: Function;
		setFieldValue: (
			field: string,
			value: string | number | object | boolean,
			shouldValidate?: boolean | undefined
		) => void;
		values: {
			email: string;
			password: string;
			name: string;
			hidden: boolean;
		};
	};
}
