import React from 'react';

import {
  Container,
  BackButton,
  BackIcon,
  Title,
  OkButton,
  OkText,
  EmptyWrapper,
} from './styles';

type PageHeaderProps = {
  onPressBackButton?: () => void;
  title: string;
  onPressOkButton?: () => void;
};

const PageHeader = ({
  onPressBackButton,
  title,
  onPressOkButton,
}: PageHeaderProps) => {
  return (
    <Container>
      {onPressBackButton ? (
        <BackButton onPress={onPressBackButton}>
          <BackIcon name="chevron-left" />
        </BackButton>
      ) : (
        <EmptyWrapper />
      )}

      <Title>{title}</Title>

      {onPressOkButton ? (
        <OkButton onPress={onPressOkButton}>
          <OkText>OK</OkText>
        </OkButton>
      ) : (
        <EmptyWrapper />
      )}
    </Container>
  );
};

export default PageHeader;
