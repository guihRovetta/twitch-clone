import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { lightTheme, darkTheme } from '../../global/styles/theme';
import { AuthProvider } from '../../hooks/auth/useAuth';
import { useThemeMode } from '../../hooks/themeMode/useThemeMode';
import Routes from '../../routes';

const Root = () => {
  const { themeMode, componentMounted } = useThemeMode();

  if (!componentMounted) {
    return <View />;
  }

  return (
    <AuthProvider>
      <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
        <StatusBar style={themeMode === 'light' ? 'dark' : 'light'} />
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default Root;
