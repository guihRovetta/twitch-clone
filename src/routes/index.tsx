import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import PrivateRoutes from './private.routes';
import PublicRoutes from './public.routes';

const Routes = () => (
  <NavigationContainer>
    <PublicRoutes />
  </NavigationContainer>
);

export default Routes;
