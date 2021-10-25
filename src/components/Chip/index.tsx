import React from 'react';
import { PressableProps } from 'react-native';

import { Container, ChipWrapper, ChipText } from './styles';

type ChipProps = PressableProps & {
  label: string;
};

const Chip = ({ label, ...rest }: ChipProps) => {
  return (
    <Container {...rest}>
      <ChipWrapper>
        <ChipText>{label}</ChipText>
      </ChipWrapper>
    </Container>
  );
};

export default Chip;
