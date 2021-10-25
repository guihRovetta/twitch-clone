import styled, { css } from 'styled-components/native';

export const Container = styled.Pressable``;

export const ChipWrapper = styled.View`
  ${({ theme }) => css`
    padding: 2px 8px;
    background-color: ${theme.colors.gray100};
    align-self: baseline;
    border-radius: 8px;
  `}
`;

export const ChipText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text400};
    font-size: ${theme.fontSize.xxsmall}px;
    font-family: ${theme.fonts.semibold};
  `}
`;
