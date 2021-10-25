import React from 'react';

import { useAuth } from '../../hooks/auth/useAuth';
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

const Header = () => {
  const { user } = useAuth();

  return (
    <Container intensity={10}>
      <Avatar uri={user?.profile_image_url} status={user?.status} />

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
