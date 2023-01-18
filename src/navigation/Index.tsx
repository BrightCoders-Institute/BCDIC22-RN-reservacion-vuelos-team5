// Node modules
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Constants
import { NavigationContainerTheme, HomeStackScreenTheme } from '../constants/themes';
// Interfaces
import { RootStackParamList } from '../interfaces/RootStackParamList';
// Screens
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default class Navigation extends Component {
	constructor(props: object) {
		super(props);
	}

	render() {
		return (
			<NavigationContainer theme={NavigationContainerTheme}>
				<Stack.Navigator initialRouteName='SignUp'>
					<Stack.Screen
						name='SignUp'
						component={SignUp}
						options={HomeStackScreenTheme}
						initialParams={{ data: undefined }}
					/>
					<Stack.Screen
						name='LogIn'
						component={LogIn}
						options={HomeStackScreenTheme}
						initialParams={{ data: undefined }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
