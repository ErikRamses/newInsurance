App.info({
  name: 'Eichelmann Insurance',
  description: 'Know where you are, and get help from the team at Eichelmann Insurance Agency',
  version: '1.0',
  buildNumber: '100'
});

//App.icons({
//  'android_mdpi': 'resources/icons/mipmap-mdpi/ic_launcher.png',
//  'android_hdpi': 'resources/icons/mipmap-hdpi/ic_launcher.png',
//  'android_xhdpi': 'resources/icons/mipmap-xhdpi/ic_launcher.png',
//  'android_xxhdpi': 'resources/icons/mipmap-xxhdpi/ic_launcher.png',
//  'android_xxxhdpi': 'resources/icons/mipmap-xxxhdpi/ic_launcher.png'
//});

App.launchScreens({
  // iOS
  'iphone_2x': 'resources/splash/640x960@2x.png',
  //'iphone5': 'resources/splash/640x1136@2x.png',
  //'iphone6': 'resources/splash/750x1334@2x.png',
  //'iphone6p_portrait': 'resources/splash/1242x2208@3x.png',
  //'iphone6p_landscape': 'resources/splash/2208x1242@3x.png',
  //'ipad_portrait': 'resources/splash/768x1024@3x.png',
  //'ipad_portrait_2x': 'resources/splash/1536x2048@2x.png',
  //'ipad_landscape': 'resources/splash/1024x768.png',
  //'ipad_landscape_2x': 'resources/splash/2048x1536@2x.png',
  // Android
  //'android_mdpi_portrait': 'resources/splash/drawable-mdpi/screen.png',
  //'android_mdpi_landscape': 'resources/splash/drawable-land-mdpi/screen.png',
  //'android_hdpi_portrait': 'resources/splash/drawable-hdpi/screen.png',
  //'android_hdpi_landscape': 'resources/splash/drawable-land-hdpi/screen.png',
  //'android_xhdpi_portrait': 'resources/splash/drawable-xhdpi/screen.png',
  //'android_xhdpi_landscape': 'resources/splash/drawable-land-xhdpi/screen.png',
  //'android_xxhdpi_portrait': 'resources/splash/drawable-xxhdpi/screen.png',
  //'android_xxhdpi_landscape': 'resources/splash/drawable-land-xxhdpi/screen.png'
});

App.setPreference('SplashScreen', 'CDVSplashScreen'); 
App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');
App.accessRule('*', true);
App.accessRule('https://*.stripe.com/*');