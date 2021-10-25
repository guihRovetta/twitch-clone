import React from 'react';

import { Container, VisualIndicator, CountIndicator } from './styles';

export type LiveIndicatorProps = {
  countValue: string;
  color?: 'light' | 'dark';
  size?: 'xsmall' | 'small';
};

const LiveIndicator = ({
  countValue,
  color = 'dark',
  size = 'small',
}: LiveIndicatorProps) => {
  return (
    <Container>
      <VisualIndicator />
      <CountIndicator color={color} size={size}>
        {countValue}
      </CountIndicator>
    </Container>
  );
};

export default LiveIndicator;
