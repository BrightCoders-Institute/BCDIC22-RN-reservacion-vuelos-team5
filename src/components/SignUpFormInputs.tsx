// Node modules
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
// Interfaces
import { ISignUpFormInputsProps } from '../interfaces/SignUpFormInputs';

export default class SignUpFormInputs extends Component<ISignUpFormInputsProps> {
	constructor(props: ISignUpFormInputsProps) {
		super(props);
	}

	render() {
		return (
			<View>
				<TextInput
					style={styles.input}
					label='Name'
					mode='outlined'
					onChangeText={this.props.formikProps.handleChange('name')}
					value={this.props.formikProps.values.name}
					keyboardType='default'
				/>
				<TextInput
					style={styles.input}
					label='E-mail'
					onChangeText={this.props.formikProps.handleChange('email')}
					value={this.props.formikProps.values.email}
					keyboardType='email-address'
					mode='outlined'
				/>
				<TextInput
					style={styles.input}
					label='Password'
					mode='outlined'
					onChangeText={this.props.formikProps.handleChange('password')}
					value={this.props.formikProps.values.password}
					secureTextEntry={this.props.formikProps.values.hidden}
					right={
						<TextInput.Icon
							icon={this.props.formikProps.values.hidden ? 'eye' : 'eye-off'}
							onPress={() => {
								this.props.formikProps.setFieldValue('hidden', !this.props.formikProps.values.hidden);
								return !this.props.formikProps.values.hidden;
							}}
						/>
					}
				/>
				<Text>Use 8 or more characters with a mix of letters, numbers, and symbols</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	input: {
		marginVertical: 10,
	},
});
