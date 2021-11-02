import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Label, CheckIcon } from './styles';

type StatusPresenceSelectorProps = TouchableOpacityProps & {
  selected?: boolean;
  isFirst?: boolean;
};

const StatusPresenceSelector = ({
  selected = false,
  isFirst = false,
  ...rest
}: StatusPresenceSelectorProps) => {
  return (
    <Container hasBorderTop={!isFirst} {...rest}>
      <Label>{rest?.children}</Label>
      {selected && <CheckIcon name="check" />}
    </Container>
  );
};

export default StatusPresenceSelector;
