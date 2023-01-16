// Node modules
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
// Interfaces
import { ISignUpFormButtonProps } from '../interfaces/SignUpFormButton';

export default class SignUpFormInputs extends Component<ISignUpFormButtonProps> {
	constructor(props: ISignUpFormButtonProps) {
		super(props);
	}

	render() {
		if (this.props.isCommonLogging) {
			return (
				<MaterialIcons.Button
					name='email'
					style={this.props.disabled ? styles.disabled : styles.enabled}
					borderRadius={this.props.disabled ? styles.disabled.borderRadius : styles.enabled.borderRadius}
				>
					<Text style={styles.title}>{this.props.text}</Text>
				</MaterialIcons.Button>
			);
		} else {
			return (
				<FontAwesome.Button
					name='google'
					style={this.props.disabled ? styles.disabled : styles.enabled}
					borderRadius={this.props.disabled ? styles.disabled.borderRadius : styles.enabled.borderRadius}
				>
					<Text style={styles.title}>{this.props.text}</Text>
				</FontAwesome.Button>
			);
		}
	}
}
const styles = StyleSheet.create({
	title: {
		color: '#FFFFFF',
		fontSize: 16,
		fontWeight: '600',
	},
	enabled: {
		padding: 10,
		borderRadius: 10,
		justifyContent: 'center',
		backgroundColor: '#5C6EF8',
	},
	disabled: {
		padding: 10,
		borderRadius: 10,
		justifyContent: 'center',
		backgroundColor: '#B6B7BA',
	},
});
