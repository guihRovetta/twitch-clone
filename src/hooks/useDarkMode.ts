import { useContext } from 'react';

import { ThemeModeContext } from '../context/ThemeModeContext';

export const useDarkMode = () => {
  const context = useContext(ThemeModeContext);

  return context;
};
