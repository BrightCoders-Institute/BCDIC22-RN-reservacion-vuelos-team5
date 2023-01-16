// Node modules
import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Formik } from 'formik';
// Components
import SignUpFormButton from '../components/SignUpFormButton';
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
						{(formikProps) => (
							<View>
								<SignUpFormInputs formikProps={formikProps} />
								<View>
									<SignUpFormButton disabled={true} isCommonLogging={true} text={'Sign Up'} />
									<Text style={{ textAlign: 'center', marginVertical: 6 }}>or</Text>
									<SignUpFormButton disabled={true} isCommonLogging={false} text={'Sign Up With Google'} />
								</View>
							</View>
						)}
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
