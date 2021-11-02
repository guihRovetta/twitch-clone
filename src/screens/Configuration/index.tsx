import { NavigationProp, useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import React from 'react';

import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader';
import { useAuth } from '../../hooks/auth/useAuth';
import { PrivateRoutesStackProps } from '../../routes/private.routes';
import {
  Container,
  CardsScrollView,
  EmptyWrapper,
  BottomWrapper,
  AppVersionWrapper,
  TwitchIcon,
  AppVersionLabel,
} from './styles';

type NavigationProps = NavigationProp<PrivateRoutesStackProps, 'Main'>;

const Configuration = () => {
  const { signOut, isLoggingOut } = useAuth();

  const navigation = useNavigation<NavigationProps>();

  const handleCloseConfigurationModal = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <PageHeader
        title="Configurações"
        onPressBackButton={handleCloseConfigurationModal}
      />

      <CardsScrollView>
        <EmptyWrapper />
        <BottomWrapper>
          <AppVersionWrapper>
            <TwitchIcon name="twitch" />
            <AppVersionLabel>{`${Constants.manifest.name} v${Constants.manifest.version}`}</AppVersionLabel>
          </AppVersionWrapper>

          <Button
            fullWidth
            color="disabled"
            onPress={signOut}
            isLoading={isLoggingOut}
          >
            Sair
          </Button>
        </BottomWrapper>
      </CardsScrollView>
    </Container>
  );
};

export default Configuration;
