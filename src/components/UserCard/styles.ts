import { Feather } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
`;

export const AvatarWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LiveIcon = styled(Feather)`
  ${({ theme }) => css`
    color: ${theme.colors.white100};
    font-size: ${theme.fontSize.large}px;
    margin-right: 16px;
  `};
`;

export const InfoWrapper = styled.View`
  align-items: flex-start;
  margin-top: 20px;
`;

export const UserName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text500};
    font-size: ${theme.fontSize.xregular}px;
    font-family: ${theme.fonts.bold};
    line-height: ${theme.lineHeight.body}px;
  `}
`;

export const UserStatus = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray200};
    font-size: ${theme.fontSize.regular}px;
    font-family: ${theme.fonts.regular};
    line-height: ${theme.lineHeight.body}px;
    margin-top: 8px;
  `}
`;
