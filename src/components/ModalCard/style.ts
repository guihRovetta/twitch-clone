import styled, { css } from 'styled-components/native';

export const Container = styled.Text`
  ${({ theme }) => css`
    background-color: ${theme.colors.modal.highlight};
  `};
`;
