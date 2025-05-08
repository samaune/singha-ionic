import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'portal.singha.app',
  appName: 'portal',
  webDir: 'www',
  server: {
		url: "https://portal.singha.app"
	},
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: '#ffffffff',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: true,
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: 'small',
      spinnerColor: '#999999',
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;
