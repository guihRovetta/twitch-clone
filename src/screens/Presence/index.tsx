import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';

import PageHeader from '../../components/PageHeader';
import StatusPresenceCard from '../../components/StatusPresenceCard';
import { PrivateRoutesStackProps } from '../../routes/private.routes';
import { Container, CardsScrollView } from './styles';

type NavigationProps = NavigationProp<PrivateRoutesStackProps, 'Main'>;

const Presence = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleClosePresenceModal = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <PageHeader
        title="Presença"
        onPressBackButton={handleClosePresenceModal}
      />

      <CardsScrollView>
        <StatusPresenceCard />
      </CardsScrollView>
    </Container>
  );
};

export default Presence;
