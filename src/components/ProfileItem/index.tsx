import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, LabelWrapper, Label, RightIcon } from './styles';

type ProfileItemProps = TouchableOpacityProps & {
  icon: React.ReactNode;
  hasRightIcon?: boolean;
  hasBorderBottom?: boolean;
};

const ProfileItem = ({
  icon,
  hasRightIcon = true,
  hasBorderBottom = true,
  ...rest
}: ProfileItemProps) => {
  return (
    <Container hasBorderBottom={hasBorderBottom} {...rest}>
      <LabelWrapper>
        {icon}
        <Label>{rest?.children}</Label>
      </LabelWrapper>
      {hasRightIcon && <RightIcon name="chevron-right" />}
    </Container>
  );
};

export default ProfileItem;
