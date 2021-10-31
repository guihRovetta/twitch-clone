import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity``;

export const ButtonWrapper = styled.View`
  ${({ theme }) => css`
    padding: 8px 16px;
    background-color: ${theme.colors.primary};
    border-radius: 24px;
    flex-direction: row;
    align-items: center;
    align-self: baseline;
  `}
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white100};
    font-size: ${theme.fontSize.small}px;
    font-family: ${theme.fonts.semibold};
    line-height: ${theme.lineHeight.body}px;
  `}
`;
