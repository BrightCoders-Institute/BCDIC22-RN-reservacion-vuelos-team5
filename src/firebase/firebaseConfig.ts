// Node modules
import Constants from 'expo-constants';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: Constants.expoConfig?.extra?.googleServices.client[0].oauth_client[2].client_id,
});

export { auth, GoogleSignin };
