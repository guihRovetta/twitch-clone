import styled, { css } from 'styled-components/native';

export const Container = styled.Pressable`
  width: 127px;
`;

export const CategoryTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text500};
    font-size: ${theme.fontSize.small}px;
    font-family: ${theme.fonts.semibold};
    margin: 2px 0 2px 0;
  `}
`;
