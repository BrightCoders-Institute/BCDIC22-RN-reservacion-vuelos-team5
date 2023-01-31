import 'dotenv/config';

export default {
  expo: {
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
    get android() {
      return {
        googleServicesFile: (() => {
          return this.extra.googleServices;
        })(),
        adaptiveIcon: {
          foregroundImage: './src/assets/adaptive-icon.png',
          backgroundColor: '#FFFFFF',
        },
        package: 'com.brightcoders.reservacion_vuelos_team5',
      };
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
      googleServices: {
        project_info: {
          project_number: process.env.FIREBASE_PROJECT_INFO_PROJECT_NUMBER,
          project_id: process.env.FIREBASE_PROJECT_INFO_PROJECT_ID,
          storage_bucket: process.env.FIREBASE_PROJECT_INFO_STORAGE_BUCKET,
        },
        client: [
          {
            client_info: {
              mobilesdk_app_id: process.env.FIREBASE_CLIENT_CLIENT_INFO_MOBILESDK_APP_ID,
              android_client_info: {
                package_name: process.env.FIREBASE_CLIENT_CLIENT_INFO_ANDROID_CLIENT_INFO_PACKAGE_NAME,
              },
            },
            oauth_client: [
              {
                client_id: process.env.FIREBASE_CLIENT_OAUTH_1_CLIENT_CLIENT_ID,
                client_type: Number(process.env.FIREBASE_CLIENT_OAUTH_1_CLIENT_CLIENT_TYPE),
                android_info: {
                  package_name: process.env.FIREBASE_CLIENT_OAUTH_1_CLIENT_ANDROID_INFO_PACKAGE_NAME,
                  certificate_hash: process.env.FIREBASE_CLIENT_OAUTH_1_CLIENT_ANDROID_INFO_CERTIFICATE_HASH,
                },
              },
              {
                client_id: process.env.FIREBASE_CLIENT_OAUTH_2_CLIENT_CLIENT_ID,
                client_type: Number(process.env.FIREBASE_CLIENT_OAUTH_2_CLIENT_CLIENT_TYPE),
                android_info: {
                  package_name: process.env.FIREBASE_CLIENT_OAUTH_2_CLIENT_ANDROID_INFO_PACKAGE_NAME,
                  certificate_hash: process.env.FIREBASE_CLIENT_OAUTH_2_CLIENT_ANDROID_INFO_CERTIFICATE_HASH,
                },
              },
              {
                client_id: process.env.FIREBASE_CLIENT_OAUTH_3_CLIENT_CLIENT_ID,
                client_type: Number(process.env.FIREBASE_CLIENT_OAUTH_3_CLIENT_CLIENT_TYPE),
              },
            ],
            api_key: [
              {
                current_key: process.env.FIREBASE_CLIENT_API_KEY_CURRENT_KEY,
              },
            ],
            services: {
              appinvite_service: {
                other_platform_oauth_client: [
                  {
                    client_id:
                      process.env.FIREBASE_CLIENT_SERVICES_APPINVITE_SERVICE_OTHER_PLATFORM_OAUTH_CLIENT_CLIENT_ID,
                    client_type:
                      process.env.FIREBASE_CLIENT_SERVICES_APPINVITE_SERVICE_OTHER_PLATFORM_OAUTH_CLIENT_CLIENT_TYPE,
                  },
                ],
              },
            },
          },
        ],
        configuration_version: Number(process.env.FIREBASE_CONFIGURATION_VERSION),
      },
    },
    owner: 'brightcoders',
  },
  name: 'reservacion-vuelos-team5',
};
