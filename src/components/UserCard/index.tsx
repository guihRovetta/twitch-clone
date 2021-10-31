import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';

import { useAuth } from '../../hooks/auth/useAuth';
import { PrivateRoutesStackProps } from '../../routes/private.routes';
import Avatar from '../Avatar';
import Button from '../Button';
import ModalCard from '../ModalCard';
import {
  Container,
  AvatarWrapper,
  LiveIcon,
  InfoWrapper,
  UserName,
  UserStatus,
} from './styles';

type NavigationProps = NavigationProp<PrivateRoutesStackProps, 'Main'>;

const UserCard = () => {
  const { user } = useAuth();
  const { profile_image_url, status, display_name } = user || {};

  const navigation = useNavigation<NavigationProps>();

  return (
    <Container>
      <ModalCard hasPadding>
        <AvatarWrapper>
          <Avatar
            uri={profile_image_url}
            status={status}
            size="large"
            onPress={() => navigation.navigate('Profile')}
          />

          <Button icon={<LiveIcon name="radio" />}>Entrar ao vivo</Button>
        </AvatarWrapper>

        <InfoWrapper>
          <UserName>{display_name}</UserName>
          <UserStatus>{status}</UserStatus>
        </InfoWrapper>
      </ModalCard>
    </Container>
  );
};

export default UserCard;
