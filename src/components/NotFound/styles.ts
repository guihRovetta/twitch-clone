import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.background};
  `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text500};
    font-size: ${theme.fontSize.regular}px;
    font-family: ${theme.fonts.semibold};
  `};
`;
