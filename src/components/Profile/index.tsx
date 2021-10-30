import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';

import { PrivateRoutesStackProps } from '../../routes/private.routes';
import PageHeader from '../PageHeader';
import { Container } from './styles';

type NavigationProps = NavigationProp<PrivateRoutesStackProps, 'Main'>;

const Profile = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleCloseProfileModal = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <PageHeader title="Conta" onPressOkButton={handleCloseProfileModal} />
    </Container>
  );
};

export default Profile;
