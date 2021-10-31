import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';

import GeneralProfileCard from '../../components/GeneralProfileCard';
import MyChannelProfileCard from '../../components/MyChannelProfileCard';
import PageHeader from '../../components/PageHeader';
import UserCard from '../../components/UserCard';
import { PrivateRoutesStackProps } from '../../routes/private.routes';
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
