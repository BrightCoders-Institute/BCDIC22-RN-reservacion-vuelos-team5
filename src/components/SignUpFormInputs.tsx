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
					onChangeText={this.props.formikprops.handleChange('name')}
					value={this.props.formikprops.values.name}
					keyboardType='default'
				/>
				<TextInput
					style={styles.input}
					label='E-mail'
					onChangeText={this.props.formikprops.handleChange('email')}
					value={this.props.formikprops.values.email}
					keyboardType='email-address'
					mode='outlined'
				/>
				<TextInput
					style={styles.input}
					label='Password'
					mode='outlined'
					onChangeText={this.props.formikprops.handleChange('password')}
					value={this.props.formikprops.values.password}
					secureTextEntry={this.props.formikprops.values.hidden}
					right={
						<TextInput.Icon
							icon={this.props.formikprops.values.hidden ? 'eye' : 'eye-off'}
							onPress={() => {
								this.props.formikprops.setFieldValue('hidden', !this.props.formikprops.values.hidden);
								return !this.props.formikprops.values.hidden;
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
