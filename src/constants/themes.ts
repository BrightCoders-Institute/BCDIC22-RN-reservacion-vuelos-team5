// Node modules
import { DefaultTheme } from '@react-navigation/native';

export const NavigationContainerTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: '#5C6EF8',
		secondary: '#FFFFFF',
		text: '#151525',
		background: '#FFFFFF',
		//border: '#FFFFFF',
		//notification: '#FFFFFF',
	},
};

export const DefaultStackScreenTheme = { headerShown: false, headerStyle: { backgroundColor: '#FFFFFF' } };

export const HomeStackScreenTheme = { ...DefaultStackScreenTheme, headerShown: false };
