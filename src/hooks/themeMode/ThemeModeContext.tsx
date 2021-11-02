import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

type ThemeModeType = 'light' | 'dark';

const THEME_MODE_STORAGE_KEY = '@twitch-clone:themeMode';

type ThemeModeProviderProps = {
  children: ReactNode;
};

export const ThemeModeContext = createContext({} as ThemeModeContextType);

type ThemeModeContextType = {
  themeMode: ThemeModeType;
  toggleTheme: () => void;
  componentMounted: boolean;
  setMode: (mode: ThemeModeType) => Promise<void>;
  setToSystemPreferedTheme: () => void;
};

export const ThemeModeProvider = ({ children }: ThemeModeProviderProps) => {
  const [themeMode, setThemeMode] = useState<ThemeModeType>('light');
  const [componentMounted, setComponentMounted] = useState(false);

  const systemPreferedTheme = useColorScheme();

  const setToSystemPreferedTheme = () => {
    setMode(systemPreferedTheme);
  };

  const setMode = async (mode: ThemeModeType) => {
    try {
      await AsyncStorage.setItem(THEME_MODE_STORAGE_KEY, JSON.stringify(mode));
      setThemeMode(mode);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTheme = () => {
    setMode(themeMode === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    (async () => {
      try {
        const localTheme = await AsyncStorage.getItem(THEME_MODE_STORAGE_KEY);

        if (localTheme) {
          setThemeMode(JSON.parse(localTheme));
        } else {
          setMode('light');
        }

        setComponentMounted(true);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (!systemPreferedTheme) return;

    setToSystemPreferedTheme();
  }, [systemPreferedTheme]);

  return (
    <ThemeModeContext.Provider
      value={{
        themeMode,
        toggleTheme,
        componentMounted,
        setMode,
        setToSystemPreferedTheme,
      }}
    >
      {children}
    </ThemeModeContext.Provider>
  );
};
