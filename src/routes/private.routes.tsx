import {
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';

import { useThemeMode } from '../hooks/themeMode/useThemeMode';
import Following from '../screens/Following';

const { Navigator, Screen } = createBottomTabNavigator();

const PrivateRoutes = () => {
  const theme = useTheme();
  const { themeMode } = useThemeMode();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: { width: 20, height: 20 },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text500,
        tabBarLabelStyle: {
          fontFamily: theme.fonts.regular,
        },
        tabBarStyle: {
          borderTopColor: theme?.colors.gray100,
          position: 'absolute',
        },
        tabBarBackground: () => (
          <BlurView
            tint={themeMode === 'light' ? 'light' : 'dark'}
            intensity={100}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    >
      <Screen
        name="Seguindo"
        component={Following}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={focused ? 'heart' : 'hearto'}
              size={20}
              color={focused ? theme.colors.primary : theme.colors.text500}
            />
          ),
        }}
      />

      <Screen
        name="Descubra"
        component={Following}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'ios-compass' : 'ios-compass-outline'}
              size={24}
              color={focused ? theme.colors.primary : theme.colors.text500}
            />
          ),
        }}
      />

      <Screen
        name="Procurar"
        component={Following}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'file-multiple' : 'file-multiple-outline'}
              size={20}
              color={focused ? theme.colors.primary : theme.colors.text500}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default PrivateRoutes;
