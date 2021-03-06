import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Home from '../screens/Home';

const { Navigator, Screen } = createStackNavigator();

const PublicRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default PublicRoutes;
