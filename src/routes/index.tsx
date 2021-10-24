import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { useAuth } from '../hooks/auth/useAuth';
import PrivateRoutes from './private.routes';
import PublicRoutes from './public.routes';

const Routes = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user?.id ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
