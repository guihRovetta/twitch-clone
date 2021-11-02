import React from 'react';

import { useThemeMode } from '../../hooks/themeMode/useThemeMode';
import ModalCard from '../ModalCard';
import Switch from '../Switch';
import { Container, SwitchWrapper, SwitchLabel, Title } from './styles';

const ThemeAppearanceCard = () => {
  const { themeMode, setMode, setToSystemPreferedTheme, isSystemTheme } =
    useThemeMode();

  const toggleSystemTheme = (value: boolean) => {
    setToSystemPreferedTheme(value);
  };

  const toggleDarkTheme = (value: boolean) => {
    setMode(value ? 'dark' : 'light');
  };

  return (
    <Container>
      <Title>Tema</Title>

      <ModalCard>
        <SwitchWrapper>
          <SwitchLabel>Corresponder tema do sistema</SwitchLabel>
          <Switch onValueChange={toggleSystemTheme} value={isSystemTheme} />
        </SwitchWrapper>

        {!isSystemTheme && (
          <SwitchWrapper hasBorderTop>
            <SwitchLabel>Tema escuro</SwitchLabel>
            <Switch
              onValueChange={toggleDarkTheme}
              value={themeMode === 'dark'}
            />
          </SwitchWrapper>
        )}
      </ModalCard>
    </Container>
  );
};

export default ThemeAppearanceCard;
