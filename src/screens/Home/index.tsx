import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';

import SignInSocialButton from '../../components/SignInSocialButton';
import { useAuth } from '../../hooks/auth/useAuth';
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
  const { signIn, isLoggingIn } = useAuth();

  const handleSignIn = async () => {
    try {
      await signIn();
    } catch (error) {
      Alert.alert('Erro SignIn', 'Ocorreu um erro ao tentar logar no app!');
    }
  };

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

        <SignInSocialButton
          name="twitch"
          title={!isLoggingIn ? 'Entrar com Twitch' : 'Entrando...'}
          onPress={handleSignIn}
          loading={isLoggingIn}
        />
      </ActionsWrapper>
    </Container>
  );
};

export default Home;
