import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

type ThemeModeType = 'light' | 'dark';

const THEME_MODE_STORAGE_KEY = '@twitch-clone:themeMode';
const IS_SYSTEM_THEME_STORAGE_KEY = '@twitch-clone:isSystemTheme';

type ThemeModeProviderProps = {
  children: ReactNode;
};

export const ThemeModeContext = createContext({} as ThemeModeContextType);

type ThemeModeContextType = {
  themeMode: ThemeModeType;
  toggleTheme: () => void;
  componentMounted: boolean;
  setMode: (mode: ThemeModeType) => Promise<void>;
  setToSystemPreferedTheme: (isSystem: boolean) => void;
  isSystemTheme: boolean;
};

export const ThemeModeProvider = ({ children }: ThemeModeProviderProps) => {
  const [themeMode, setThemeMode] = useState<ThemeModeType>('light');
  const [componentMounted, setComponentMounted] = useState(false);
  const [isSystemTheme, setIsSystemTheme] = useState(true);

  const systemPreferedTheme = useColorScheme();

  const setToSystemPreferedTheme = async (value: boolean) => {
    try {
      await AsyncStorage.setItem(
        IS_SYSTEM_THEME_STORAGE_KEY,
        JSON.stringify(value)
      );
      setIsSystemTheme(value);
      if (!value) return;
      setMode(systemPreferedTheme);
    } catch (error) {
      console.log(error);
    }
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
    (async () => {
      try {
        const isSystemTheme = await AsyncStorage.getItem(
          IS_SYSTEM_THEME_STORAGE_KEY
        );
        if (!systemPreferedTheme && JSON.parse(isSystemTheme)) return;

        setToSystemPreferedTheme(true);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [systemPreferedTheme]);

  return (
    <ThemeModeContext.Provider
      value={{
        themeMode,
        toggleTheme,
        componentMounted,
        setMode,
        setToSystemPreferedTheme,
        isSystemTheme,
      }}
    >
      {children}
    </ThemeModeContext.Provider>
  );
};
