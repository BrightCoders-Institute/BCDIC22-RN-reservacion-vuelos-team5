import 'dotenv/config';
import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'reservacion-vuelos-team5',
  slug: 'reservacion-vuelos-team5',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './src/assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './src/assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    // googleServicesFile: './GoogleService-Info.plist',
    supportsTablet: true,
    bundleIdentifier: 'com.brightcoders.reservacion_vuelos_team5',
  },
  android: {
    googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
    adaptiveIcon: {
      foregroundImage: './src/assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
    package: 'com.brightcoders.reservacion_vuelos_team5',
  },
  web: {
    favicon: './src/assets/favicon.png',
  },
  sdkVersion: '47.0.0',
  plugins: ['@react-native-firebase/app', '@react-native-firebase/auth', '@react-native-google-signin/google-signin'],
  extra: {
    eas: {
      projectId: '14ebe608-ea10-4f68-bff0-fc60a64662e0',
    },
    googleServices: process.env.GOOGLE_SERVICES_DATA
      ? (JSON.parse(process.env.GOOGLE_SERVICES_DATA) as { [key: string]: unknown })
      : undefined,
  },
  owner: 'brightcoders',
});
