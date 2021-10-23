import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { lightTheme, darkTheme } from '../../global/styles/theme';
import { useDarkMode } from '../../hooks/useDarkMode';
import Routes from '../../routes';

const Root = () => {
  const { themeMode, componentMounted } = useDarkMode();

  if (!componentMounted) {
    return <View />;
  }

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <StatusBar style={themeMode === 'light' ? 'dark' : 'light'} />
      <Routes />
    </ThemeProvider>
  );
};

export default Root;
