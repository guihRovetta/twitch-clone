import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, UserImage, StatusIndicator, StatusType } from './styles';

type AvatarProps = TouchableOpacityProps & {
  uri: string;
  status: StatusType;
};

const Avatar = ({ uri, status, ...rest }: AvatarProps) => {
  return (
    <Container {...rest}>
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
