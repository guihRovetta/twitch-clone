import React from 'react';
import { Switch as RNSwitch, SwitchProps as RNSwitchProps } from 'react-native';
import { useTheme } from 'styled-components';

type SwitchProps = RNSwitchProps & object;

const Switch = ({ ...rest }: SwitchProps) => {
  const theme = useTheme();

  return <RNSwitch trackColor={{ true: theme.colors.primary }} {...rest} />;
};

export default Switch;
