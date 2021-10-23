import { FontAwesome5 } from '@expo/vector-icons';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 24px;
`;

export const LogoWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const AppLogo = styled(FontAwesome5)`
  color: ${({ theme }) => theme.colors.white100};
  font-size: 40px;
  margin-bottom: 8px;
`;

export const AppTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white100};
  font-size: ${({ theme }) => theme.fontSize.regular}px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  line-height: ${({ theme }) => theme.lineHeight.body}px;
`;

export const Heading = styled.Text`
  margin: 72px 0 88px 0;
  color: ${({ theme }) => theme.colors.white100};
  font-size: ${({ theme }) => theme.fontSize.xlarge}px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  text-align: center;
`;

export const ActionsWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ActionsDescription = styled.Text`
  color: ${({ theme }) => theme.colors.white100};
  font-size: ${({ theme }) => theme.fontSize.large}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;
  margin-bottom: 48px;
`;
