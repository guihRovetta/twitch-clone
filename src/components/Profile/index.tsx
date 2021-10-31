import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';

import { PrivateRoutesStackProps } from '../../routes/private.routes';
import GeneralProfileCard from '../GeneralProfileCard';
import MyChannelProfileCard from '../MyChannelProfileCard';
import PageHeader from '../PageHeader';
import UserCard from '../UserCard';
import { Container, CardsScrollView } from './styles';

type NavigationProps = NavigationProp<PrivateRoutesStackProps, 'Main'>;

const Profile = () => {
  const navigation = useNavigation<NavigationProps>();

  const handleCloseProfileModal = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <PageHeader title="Conta" onPressOkButton={handleCloseProfileModal} />

      <CardsScrollView>
        <UserCard />

        <GeneralProfileCard />

        <MyChannelProfileCard />
      </CardsScrollView>
    </Container>
  );
};

export default Profile;
