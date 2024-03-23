import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'Lato-Regular': require('./assets/fonts/Lato/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato/Lato-Bold.ttf'),
    // Add other weights if needed
  });
};
