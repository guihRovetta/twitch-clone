import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonWrapper, ButtonText } from './styles';

type ButtonProps = TouchableOpacityProps & {
  icon?: React.ReactNode;
};

const Button = ({ icon, ...rest }: ButtonProps) => {
  return (
    <Container {...rest}>
      <ButtonWrapper>
        {icon}
        <ButtonText>{rest?.children}</ButtonText>
      </ButtonWrapper>
    </Container>
  );
};

export default Button;
