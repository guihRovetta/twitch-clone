import styled, { css } from 'styled-components/native';

export const Container = styled.Text`
  ${({ theme }) => css`
    padding: 10px 16px;
    color: ${theme.colors.text500};
    font-size: ${theme.fontSize.xregular}px;
    font-family: ${theme.fonts.bold};
    background: ${theme.colors.background};
  `};
`;
