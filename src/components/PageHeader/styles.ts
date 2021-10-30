import { Feather } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackIcon = styled(Feather)`
  ${({ theme }) => css`
    color: ${theme.colors.text500};
    font-size: ${theme.fontSize.xlarge}px;
  `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text500};
    font-size: ${theme.fontSize.xregular}px;
    font-family: ${theme.fonts.semibold};
  `};
`;

export const OkButton = styled.TouchableOpacity``;

export const OkText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text500};
    font-size: ${theme.fontSize.xregular}px;
    font-family: ${theme.fonts.semibold};
  `};
`;

export const EmptyWrapper = styled.View`
  width: 24px;
`;
