import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.modal.background};
    padding: 16px;
  `};
`;

export const CardsScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;
