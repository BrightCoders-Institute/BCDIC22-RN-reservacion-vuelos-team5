// Node modules
import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Formik } from 'formik';
// Components
import SignUpFormInputs from '../components/SignUpFormInputs';
// Interfaces
import { ISignUpProps } from '../interfaces/SignUp';

export default class SignUp extends Component<ISignUpProps> {
	constructor(props: ISignUpProps) {
		super(props);
	}

	render() {
		const initialValues = { name: '', email: '', password: '', hidden: true };
		return (
			<ScrollView style={{ marginTop: Constants.statusBarHeight }}>
				<View style={{ margin: '4%' }}>
					<Text style={styles.pageTitle}>Sign Up</Text>
					<Formik
						initialValues={initialValues}
						onSubmit={(values) => {
							console.log(values);
						}}
					>
						{(formikProps) => <SignUpFormInputs formikProps={formikProps} />}
					</Formik>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	pageTitle: {
		color: '#5C6EF8',
		fontSize: 22,
		fontWeight: 'bold',
		marginVertical: 10,
	},
});
