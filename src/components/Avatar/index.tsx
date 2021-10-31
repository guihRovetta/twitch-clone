import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  UserImage,
  StatusIndicator,
  StatusType,
  SizeType,
} from './styles';

type AvatarProps = TouchableOpacityProps & {
  uri: string;
  status: StatusType;
  size?: SizeType;
};

const Avatar = ({
  uri,
  status = 'online',
  size = 'normal',
  ...rest
}: AvatarProps) => {
  return (
    <Container {...rest} size={size}>
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
