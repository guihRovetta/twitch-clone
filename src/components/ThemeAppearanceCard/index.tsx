import React, { useState } from 'react';

import { useThemeMode } from '../../hooks/themeMode/useThemeMode';
import ModalCard from '../ModalCard';
import Switch from '../Switch';
import { Container, SwitchWrapper, SwitchLabel, Title } from './styles';

const ThemeAppearanceCard = () => {
  const { themeMode, setMode, setToSystemPreferedTheme, isSystemTheme } =
    useThemeMode();

  const [systemTheme, setSystemTheme] = useState(isSystemTheme);
  const [darkTheme, setDarkTheme] = useState(themeMode === 'dark');

  const toggleSystemTheme = (value: boolean) => {
    setSystemTheme(value);
    setToSystemPreferedTheme(value);
  };

  const toggleDarkTheme = (value: boolean) => {
    setDarkTheme(value);
    setMode(value ? 'dark' : 'light');
  };

  return (
    <Container>
      <Title>Tema</Title>

      <ModalCard>
        <SwitchWrapper>
          <SwitchLabel>Corresponder tema do sistema</SwitchLabel>
          <Switch onValueChange={toggleSystemTheme} value={systemTheme} />
        </SwitchWrapper>

        {!isSystemTheme && (
          <SwitchWrapper hasBorderTop>
            <SwitchLabel>Tema escuro</SwitchLabel>
            <Switch onValueChange={toggleDarkTheme} value={darkTheme} />
          </SwitchWrapper>
        )}
      </ModalCard>
    </Container>
  );
};

export default ThemeAppearanceCard;
