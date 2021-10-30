import { NavigationProp, useNavigation } from '@react-navigation/core';
import React from 'react';

import { useAuth } from '../../hooks/auth/useAuth';
import { useThemeMode } from '../../hooks/themeMode/useThemeMode';
import { PrivateRoutesStackProps } from '../../routes/private.routes';
import Avatar from '../Avatar';
import {
  Container,
  ActionsWrapper,
  ActionButton,
  VideoCameraIcon,
  InboxIcon,
  ChatIcon,
  SearchIcon,
} from './styles';

type NavigationProps = NavigationProp<PrivateRoutesStackProps, 'Main'>;

const Header = () => {
  const { user } = useAuth();
  const { themeMode } = useThemeMode();

  const navigation = useNavigation<NavigationProps>();

  return (
    <Container intensity={100} tint={themeMode === 'light' ? 'light' : 'dark'}>
      <Avatar
        uri={user?.profile_image_url}
        status={user?.status}
        onPress={() => navigation.navigate('Profile')}
      />

      <ActionsWrapper>
        <ActionButton>
          <VideoCameraIcon name="videocamera" />
        </ActionButton>
        <ActionButton>
          <InboxIcon name="inbox" />
        </ActionButton>
        <ActionButton>
          <ChatIcon name="chat-bubble-outline" />
        </ActionButton>
        <ActionButton>
          <SearchIcon name="search1" />
        </ActionButton>
      </ActionsWrapper>
    </Container>
  );
};

export default Header;
