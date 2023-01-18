// Node modules
import React, { Component } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
// Interfaces
import { ILogInFormInputsProps } from '../interfaces/LogInFormInputs';
// Styles
import Styles from '../styles/LogIn';

export default class LogInFormInputs extends Component<ILogInFormInputsProps> {
	constructor(props: ILogInFormInputsProps) {
		super(props);
	}

	render() {
		return (
			<View>
				<TextInput
					style={Styles.formInputs.input}
					activeOutlineColor={Styles.formInputs.input.outlineColor}
					label='E-mail'
					mode={Styles.formInputs.input.mode}
					onChangeText={this.props.formikProps.handleChange('email')}
					value={this.props.formikProps.values.email}
					keyboardType='email-address'
				/>
				<TextInput
					style={Styles.formInputs.input}
					activeOutlineColor={Styles.formInputs.input.outlineColor}
					label='Password'
					mode={Styles.formInputs.input.mode}
					onChangeText={this.props.formikProps.handleChange('password')}
					value={this.props.formikProps.values.password}
					secureTextEntry={this.props.formikProps.values.passwordHidden}
					right={
						<TextInput.Icon
							icon={this.props.formikProps.values.passwordHidden ? 'eye' : 'eye-off'}
							onPress={() => {
								this.props.formikProps.setFieldValue('passwordHidden', !this.props.formikProps.values.passwordHidden);
								return !this.props.formikProps.values.passwordHidden;
							}}
						/>
					}
				/>
			</View>
		);
	}
}
