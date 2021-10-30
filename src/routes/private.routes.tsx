import {
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';

import NotFound from '../components/NotFound';
import Profile from '../components/Profile';
import { useThemeMode } from '../hooks/themeMode/useThemeMode';
import Following from '../screens/Following';

const BottomTab = createBottomTabNavigator();

const MainTabs = () => {
  const theme = useTheme();
  const { themeMode } = useThemeMode();

  return (
    <BottomTab.Navigator
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
      <BottomTab.Screen
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

      <BottomTab.Screen
        name="Descubra"
        component={NotFound}
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

      <BottomTab.Screen
        name="Procurar"
        component={NotFound}
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
    </BottomTab.Navigator>
  );
};

export type PrivateRoutesStackProps = {
  Main: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<PrivateRoutesStackProps>();

const PrivateRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={MainTabs} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default PrivateRoutes;
