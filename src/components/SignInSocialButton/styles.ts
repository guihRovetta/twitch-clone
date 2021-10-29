import { FontAwesome5 } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.Pressable`
  ${({ theme }) => css`
    height: 56px;
    background-color: ${theme.colors.white100};
    border-radius: 8px;
    align-items: center;
    flex-direction: row;
  `}
`;

export const IconContainer = styled.View`
  ${({ theme }) => css`
    height: 100%;
    justify-content: center;
    align-items: center;
    border-color: ${theme.colors.primary};
    border-right-width: 1px;
    padding: 16px;
  `}
`;

export const Icon = styled(FontAwesome5)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: 24px;
  `}
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fontSize.small}px;
    font-family: ${theme.fonts.semibold};
    line-height: ${theme.lineHeight.body}px;
  `}
`;

export const LoadingIndicator = styled(ActivityIndicator).attrs(
  ({ theme }) => ({
    color: theme.colors.primary,
    size: 24,
  })
)``;
