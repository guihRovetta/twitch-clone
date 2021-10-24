import React from 'react';

import { Container, UserImage, StatusIndicator, StatusType } from './styles';

type AvatarProps = {
  uri: string;
  status: StatusType;
};

const Avatar = ({ uri, status }: AvatarProps) => {
  return (
    <Container>
      <UserImage
        source={{
          uri,
        }}
        resizeMode="cover"
      />
      <StatusIndicator status={status} />
    </Container>
  );
};

export default Avatar;
