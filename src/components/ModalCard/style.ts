import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.modal.highlight};
    border-radius: 16px;
    padding: 16px;
  `};
`;
