import React from 'react';

import { Container } from './style';

type ModalCardProps = {
  children: React.ReactNode;
};

const ModalCard = ({ children }: ModalCardProps) => {
  return <Container>{children}</Container>;
};

export default ModalCard;
