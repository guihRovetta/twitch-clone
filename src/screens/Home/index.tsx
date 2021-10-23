import { StatusBar } from 'expo-status-bar';
import React from 'react';

import SignInSocialButton from '../../components/SignInSocialButton';
import {
  Container,
  LogoWrapper,
  AppLogo,
  AppTitle,
  Heading,
  ActionsWrapper,
  ActionsDescription,
} from './styles';

const Home = () => {
  return (
    <Container>
      <StatusBar style="light" />
      <LogoWrapper>
        <AppLogo name="twitch" />
        <AppTitle>twitch-clone</AppTitle>
      </LogoWrapper>

      <Heading>
        Explore seus dados {'\n'} das lives e jogos com sua {'\n'} conta da
        Twitch
      </Heading>

      <ActionsWrapper>
        <ActionsDescription>
          Faça login com {'\n'}
          sua conta da Twitch
        </ActionsDescription>

        <SignInSocialButton name="twitch" title="Entrar com Twitch" />
      </ActionsWrapper>
    </Container>
  );
};

export default Home;
