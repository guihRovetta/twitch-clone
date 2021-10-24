import React from 'react';
import { PressableProps } from 'react-native';

import {
  Container,
  IconContainer,
  Icon,
  ButtonText,
  LoadingIndicator,
} from './styles';

type SignInSocialButtonProps = PressableProps & {
  name: string;
  title: string;
  loading?: boolean;
};

const SignInSocialButton = ({
  name,
  title,
  loading = false,
  ...rest
}: SignInSocialButtonProps) => {
  return (
    <Container {...rest}>
      <IconContainer>
        {!loading ? <Icon name={name} /> : <LoadingIndicator />}
      </IconContainer>

      <ButtonText>{title}</ButtonText>
    </Container>
  );
};

export default SignInSocialButton;
