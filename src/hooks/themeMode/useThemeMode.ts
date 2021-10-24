import { useContext } from 'react';

import { ThemeModeContext } from './ThemeModeContext';

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);

  return context;
};
