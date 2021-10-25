import styled, { css } from 'styled-components/native';

export const Container = styled.Pressable``;

export const CategoryTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text500};
    font-size: ${theme.fontSize.small}px;
    font-family: ${theme.fonts.semibold};
    margin: 4px 0 4px 0;
  `}
`;
