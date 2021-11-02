import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  ButtonWrapper,
  ButtonText,
  LoadingIndicator,
} from './styles';

export type ColorType = 'primary' | 'disabled';
export type BorderRadiusType = 'normal' | 'large';

type ButtonProps = TouchableOpacityProps & {
  icon?: React.ReactNode;
  fullWidth?: boolean;
  color?: ColorType;
  borderRadiusType?: BorderRadiusType;
  isLoading?: boolean;
};

const Button = ({
  icon,
  fullWidth = false,
  color = 'primary',
  borderRadiusType = 'normal',
  isLoading = false,
  ...rest
}: ButtonProps) => {
  return (
    <Container {...rest}>
      <ButtonWrapper
        fullWitdh={fullWidth}
        color={color}
        borderRadiusType={borderRadiusType}
      >
        {icon}
        {!isLoading ? (
          <ButtonText color={color}>{rest?.children}</ButtonText>
        ) : (
          <LoadingIndicator />
        )}
      </ButtonWrapper>
    </Container>
  );
};

export default Button;
