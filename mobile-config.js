App.info({
  id: 'com.hygge.admin.insurance',
  name: 'Eichelmann Insurance',
  description: 'Know where you are, and get help from the team at Eichelmann Insurance Agency',
  author: 'Hygge',
  email: 'hello@colectivohygge.com',
  website: 'http://app1.cf/getapp',
  version: '1.1',
  buildNumber: '200'
});

App.icons({
  'android_mdpi': 'resources/icons/android/res/drawable-mdpi/icon.png',
  'android_hdpi': 'resources/icons/android/res/drawable-hdpi/icon.png',
  'android_xhdpi': 'resources/icons/android/res/drawable-xhdpi/icon.png',
  'android_xxhdpi': 'resources/icons/android/res/drawable-xxhdpi/icon.png',
  'android_xxxhdpi': 'resources/icons/android/res/drawable-xxxhdpi/icon.png',
  'iphone_2x': 'resources/icons/ios/res/iphone_2x.png',
  'iphone_3x': 'resources/icons/ios/res/iphone_3x.png',
  'ipad': 'resources/icons/ios/res/ipad.png',
  'ipad_2x': 'resources/icons/ios/res/ipad_2x.png',
  'ipad_pro': 'resources/icons/ios/res/ipad_pro.png',
  'ios_settings': 'resources/icons/ios/res/ios_settings.png',
  'ios_settings_2x': 'resources/icons/ios/res/ios_settings_2x.png',
  'ios_settings_3x': 'resources/icons/ios/res/ios_settings_3x.png',
  'ios_spotlight': 'resources/icons/ios/res/ios_spotlight.png',
  'ios_spotlight_2x': 'resources/icons/ios/res/ios_spotlight_2x.png'
});

App.launchScreens({
  // iOS
  'iphone_2x': 'resources/splash/iphone_2x.png',
  'iphone5': 'resources/splash/iphone5.png',
  'iphone6': 'resources/splash/iphone6.png',
  'iphone6p_portrait': 'resources/splash/iphone6p_portrait.png',
  'iphone6p_landscape': 'resources/splash/iphone6p_landscape.png',
  'ipad_portrait': 'resources/splash/ipad_portrait.png',
  'ipad_portrait_2x': 'resources/splash/ipad_portrait_2x.png',
  'ipad_landscape': 'resources/splash/ipad_landscape.png',
  'ipad_landscape_2x': 'resources/splash/ipad_landscape_2x.png',
  // Android
  'android_mdpi_portrait': 'resources/splash/drawable-mdpi/screen.png',
  'android_mdpi_landscape': 'resources/splash/drawable-land-mdpi/screen.png',
  'android_hdpi_portrait': 'resources/splash/drawable-hdpi/screen.png',
  'android_hdpi_landscape': 'resources/splash/drawable-land-hdpi/screen.png',
  'android_xhdpi_portrait': 'resources/splash/drawable-xhdpi/screen.png',
  'android_xhdpi_landscape': 'resources/splash/drawable-land-xhdpi/screen.png',
  'android_xxhdpi_portrait': 'resources/splash/drawable-xxhdpi/screen.png',
  'android_xxhdpi_landscape': 'resources/splash/drawable-land-xxhdpi/screen.png'
});

App.configurePlugin('cordova-plugin-facebook4', {
  APP_ID: '1746937965559748',
  APP_NAME: 'f6fa6465d04217fcbe64916f20ad8438'
});

App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');
App.accessRule('*.facebook.com/*');
App.accessRule('*', true);
App.accessRule('http://*', {type: 'navigation'});
App.accessRule('https://*', {type: 'navigation'});