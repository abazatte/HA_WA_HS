import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'DBInfo',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    url: 'http://134.255.219.65:3131'
  }
};

export default config;
