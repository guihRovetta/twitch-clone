import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  padding: 8px 16px;
`;

export const PageHeadingText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text500};
    font-size: ${theme.fontSize.xxlarge}px;
    font-family: ${theme.fonts.bold};
  `};
`;
