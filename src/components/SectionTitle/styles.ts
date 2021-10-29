import styled, { css } from 'styled-components/native';

export const Container = styled.Text`
  ${({ theme }) => css`
    padding: 8px 0;
    color: ${theme.colors.text500};
    font-size: ${theme.fontSize.xregular}px;
    font-family: ${theme.fonts.bold};
    background: ${theme.colors.background};
  `};
`;
