import React from 'react';
import { PressableProps } from 'react-native';

import { Container, IconContainer, Icon, ButtonText } from './styles';

type SignInSocialButtonProps = PressableProps & {
  name: string;
  title: string;
};

const SignInSocialButton = ({
  name,
  title,
  ...rest
}: SignInSocialButtonProps) => {
  return (
    <Container {...rest}>
      <IconContainer>
        <Icon name={name} />
      </IconContainer>

      <ButtonText>{title}</ButtonText>
    </Container>
  );
};

export default SignInSocialButton;
