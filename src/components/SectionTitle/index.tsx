import React from 'react';

import { Container } from './styles';

type SectionTitleProps = {
  children: React.ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps) => {
  return <Container>{children}</Container>;
};

export default SectionTitle;
