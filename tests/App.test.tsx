// Node modules
import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';
import { describe, expect, it } from '@jest/globals';
// Navigation
import Navigation from '../src/navigation/Index';
// Root
import App from '../App';

describe('<App />', () => {
  let app: ReactTestRenderer;
  let logIn: ReactTestInstance;
  let signUp: ReactTestInstance;
  beforeAll(() => {
    jest.useFakeTimers();
    app = create(<App />);
  });
  describe('<Navigation />', () => {
    it('has an attached navigation', () => {
      jest.useFakeTimers();
      const appChildren = app.root.children;
      if (appChildren.length > 0) {
        const navigation = appChildren[0];
        if (typeof navigation !== 'string') {
          expect(navigation.type).toBe(Navigation);
        }
      }
    });
  });
  describe('<SignUp />', () => {
    test('navigate to <LogIn />', () => {
      logIn = app.root.findByProps({ testID: 'screenSignUp' });
      const redirect = logIn.parent?.findByProps({ testID: 'linkLogIn' });
      expect(logIn.parent?.props.navigation.isFocused()).toBe(true);
      global.setImmediate = jest.useRealTimers as unknown as typeof setImmediate;
      act(() => {
        redirect?.props.onPress();
      });
      expect(logIn.parent?.props.navigation.isFocused()).toBe(false);
    });
  });
  describe('<LogIn />', () => {
    test('navigate to <SignUp />', () => {
      signUp = app.root.findByProps({ testID: 'screenLogIn' });
      const redirect = signUp.parent?.findByProps({ testID: 'linkSignUp' });
      expect(signUp.parent?.props.navigation.isFocused()).toBe(true);
      global.setImmediate = jest.useRealTimers as unknown as typeof setImmediate;
      act(() => {
        redirect?.props.onPress();
      });
      expect(signUp.parent).toBeNull();
    });
  });
});
