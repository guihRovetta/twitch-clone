import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { ThemeModeProvider } from './src/hooks/themeMode/ThemeModeContext';
import Root from './src/screens/Root';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeModeProvider>
      <Root />
    </ThemeModeProvider>
  );
}
