import React from 'react';

import { Container } from './style';

type ModalCardProps = {
  hasPadding?: boolean;
  children: React.ReactNode;
};

const ModalCard = ({ hasPadding = false, children }: ModalCardProps) => {
  return <Container hasPadding={hasPadding}>{children}</Container>;
};

export default ModalCard;
