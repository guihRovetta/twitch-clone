import { useContext } from 'react';

import { AuthContext, AuthProvider } from './AuthContext';

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
