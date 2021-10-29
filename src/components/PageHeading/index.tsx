import React from 'react';

import { Container, PageHeadingText } from './styles';

type PageHeadingProps = {
  children: React.ReactNode;
};

const PageHeading = ({ children }: PageHeadingProps) => {
  return (
    <Container>
      <PageHeadingText>{children}</PageHeadingText>
    </Container>
  );
};

export default PageHeading;
