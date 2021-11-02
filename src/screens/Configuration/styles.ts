import { FontAwesome5 } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.modal.background};
    padding: 16px;
  `};
`;

export const CardsScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})``;

export const BottomWrapper = styled.View`
  width: 100%;
`;

export const AppVersionWrapper = styled.View`
  align-items: center;
  margin-bottom: 16px;
`;

export const TwitchIcon = styled(FontAwesome5)`
  ${({ theme }) => css`
    color: ${theme.colors.text300};
    font-size: 40px;
  `}
`;

export const AppVersionLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text300};
    font-size: ${theme.fontSize.small}px;
    font-family: ${theme.fonts.regular};
    margin-top: 8px;
  `};
`;

export const EmptyWrapper = styled.View``;
